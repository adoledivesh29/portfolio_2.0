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
            const clamp = (v, min, max) => Math.max(min, Math.min(v, max));

            dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
            dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

            borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
            borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

            const w = window.innerWidth;
            const h = window.innerHeight;

            const dotR = 4; // 8px / 2
            const borderR =
                variant === 'card' ? 30 :
                variant === 'navlink' ? 22 :
                14; // radii: 60px / 44px / 28px outer ring

            const clampedDotX = clamp(dotPosition.current.x, dotR, w - dotR);
            const clampedDotY = clamp(dotPosition.current.y, dotR, h - dotR);

            const clampedBorderX = clamp(borderDotPosition.current.x, borderR, w - borderR);
            const clampedBorderY = clamp(borderDotPosition.current.y, borderR, h - borderR);

            setRenderPos({
                dot: { x: clampedDotX, y: clampedDotY },
                border: { x: clampedBorderX, y: clampedBorderY },
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [variant]);

    const hideCenterDot = variant === 'card' || variant === 'navlink';
    const borderRingPx =
        variant === 'card' ? 60 :
        variant === 'navlink' ? 44 :
        28;

    return (
        <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
            {!hideCenterDot && (
                <div
                    className="absolute rounded-full dark:bg-white bg-black z-[99999]"
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
                className="absolute rounded-full border dark:border-white border-black z-[99999]"
                style={{
                    width: `${borderRingPx}px`,
                    height: `${borderRingPx}px`,
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
