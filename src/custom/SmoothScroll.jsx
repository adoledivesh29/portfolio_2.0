// SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,       // speed
            easing: (t) => 1 - Math.pow(1 - t, 3), // ease out cubic
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // cleanup on unmount
        };
    }, []);

    return null; // doesn’t render anything
};

export default SmoothScroll;
