import { useEffect } from 'react';
import '../styles.css';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const tip = document.getElementById("tip");

        const handleMouseMove = (e) => {
            cursor.style.top = (e.pageY - 40) + "px";
            cursor.style.left = (e.pageX - 40) + "px";
            tip.style.display = "none";
            cursor.style.pointerEvents = "none";
            tip.style.pointerEvents = "none";
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            <div id="cursor"></div>
            <div id="tip"></div>
        </>
    );
};

export default Cursor;
