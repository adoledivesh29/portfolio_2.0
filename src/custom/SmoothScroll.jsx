// SmoothScroll.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // scroll speed
            easing: (t) => 1 - Math.pow(1 - t, 3), // ease out cubic
            smooth: true,
            smoothTouch: false,
        });

        // expose globally
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            delete window.lenis;
        };
    }, []);

    return null;
};

export default SmoothScroll;
