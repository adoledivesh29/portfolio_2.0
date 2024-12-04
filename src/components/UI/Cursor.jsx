import { useEffect } from 'react';
import '../../styles.css';
import gsap from 'gsap';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const tip = document.getElementById("tip");

        // Handle mouse movement
        const handleMouseMove = (e) => {
            cursor.style.top = (e.pageY - 40) + "px";
            cursor.style.left = (e.pageX - 40) + "px";
            tip.style.display = "none";
            cursor.style.pointerEvents = "none";
            tip.style.pointerEvents = "none";
        };

        // Handle touch movement
        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            cursor.style.top = (touch.pageY - 40) + "px";
            cursor.style.left = (touch.pageX - 40) + "px";
            tip.style.display = "none";
            cursor.style.pointerEvents = "none";
            tip.style.pointerEvents = "none";
        };

        // Add hover effect
        const handleHoverElements = () => {
            const hoverElements = document.querySelectorAll('.cursor-hover');

            hoverElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    gsap.to(cursor, {
                        duration: 0.4,
                        width: 60,
                        height: 60,
                        background: 'transparent',
                        border: '2px solid rgba(0, 0, 0, 0.5)',
                        ease: 'power2.out'
                    });
                });

                element.addEventListener('mouseleave', () => {
                    gsap.to(cursor, {
                        duration: 0.4,
                        height: 80,
                        width: 80,
                        background: 'black',
                        border: 'none',
                        ease: 'power2.out'
                    });
                });
            });
        };

        // Add both mouse and touch event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);
        handleHoverElements();

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('touchmove', handleTouchMove);
            const hoverElements = document.querySelectorAll('.cursor-hover');
            hoverElements.forEach(element => {
                element.removeEventListener('mouseenter', () => { });
                element.removeEventListener('mouseleave', () => { });
            });
        };
    }, []);

    return (
        <>
            <div id="cursor"></div>
            <div id="tip"></div>
        </>
    );
};

export default Cursor;
