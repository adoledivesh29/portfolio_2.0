import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";


const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(221, 206, 35, 0.25)", onclick }) => {
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        divRef.current.style.setProperty("--mouse-x", `${x}px`);
        divRef.current.style.setProperty("--mouse-y", `${y}px`);
        divRef.current.style.setProperty("--spotlight-color", spotlightColor);
    };

    const x = useMotionValue();
    const y = useMotionValue();
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!divRef.current) return;

        handleMouseMove(e);

        const rect = divRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -14;
        const rotationY = (offsetX / (rect.width / 2)) * 14;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(1.05);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <motion.div
            ref={divRef}
            className={`card-spotlight ${className} tilted-card-figure`}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onclick}
            style={{
                rotateX,
                rotateY,
                scale,
                transformPerspective: 1000,
                transformStyle: "preserve-3d"
            }}
        >
            {children}
        </motion.div>
    );
};

export default SpotlightCard;
