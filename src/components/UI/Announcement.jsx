import React, { useState, useEffect } from "react";

const Announcement = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show announcement when at the top of the page
            if (currentScrollY <= 10) {
                setIsVisible(true);
            }
            // Hide announcement when scrolling up from any position
            else if (currentScrollY < lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            }
            // Show announcement when scrolling down past a certain point
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`w-full bg-yellow-400 text-black py-1 overflow-hidden z-500000 transition-transform duration-300 ease-in-out ${isVisible ? 'top-0' : '-top-10'
            }`}>
            <div className="whitespace-nowrap animate-marquee">
                {message || "🚧 This website is under development. Some features may not work properly. 🚧"}
            </div>
        </div>
    );
};

export default Announcement;
