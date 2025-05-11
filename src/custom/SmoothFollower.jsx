'use client';
import { useState, useEffect, useRef } from 'react';
import { useCursor } from '../contexts/CursorContext';

export default function SmoothFollower() {
    const { variant } = useCursor();
    const mousePosition = useRef({ x: 0, y: 0 });
    const dotPosition = useRef({ x: 0, y: 0 });
    const borderDotPosition = useRef({ x: 0, y: 0 });

    const [renderPos, setRenderPos] = useState({
        dot: { x: 0, y: 0 },
        border: { x: 0, y: 0 },
    });

    const DOT_SMOOTHNESS = 0.2;
    const BORDER_DOT_SMOOTHNESS = 0.1;

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const lerp = (start, end, factor) => start + (end - start) * factor;

            dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
            dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

            borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
            borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    const isCard = variant === 'card';

    return (
        <div className="pointer-events-none fixed inset-0 z-[1001]">
            {!isCard && (
                <div
                    className="absolute rounded-full dark:bg-white bg-black z-[1001]"
                    style={{
                        width: '8px',
                        height: '8px',
                        transform: 'translate(-50%, -50%)',
                        left: `${renderPos.dot.x}px`,
                        top: `${renderPos.dot.y}px`,
                    }}
                />
            )}

            <div
                className="absolute rounded-full border dark:border-white border-black z-[1001]"
                style={{
                    width: isCard ? '60px' : '28px',
                    height: isCard ? '60px' : '28px',
                    backgroundColor: 'transparent',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    transition: 'width 0.3s, height 0.3s, background-color 0.3s',
                }}
            />
        </div>
    );
}
