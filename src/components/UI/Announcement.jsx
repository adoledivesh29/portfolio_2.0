import React, { useState, useEffect } from "react";

const Announcement = ({ message }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            const isMobileDevice = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

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
        <div className={`w-full bg-yellow-400 text-black py-1 overflow-hidden z-5 transition-transform duration-300 ease-in-out ${isVisible ? 'top-0' : '-top-10'
            }`}>
            <div className="whitespace-nowrap animate-marquee">
                {isMobile
                    ? "📱 This website is not yet compatible with mobile devices. Please view on desktop for the best experience. 📱"
                    : (message || "🚧 This website is under development. Some features may not work properly. 🚧")
                }
            </div>
        </div>
    );
};

export default Announcement;
