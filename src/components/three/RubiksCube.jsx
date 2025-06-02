import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Box from './Box';

const RubiksCube = () => {
    const startGap = 5;
    const endGap = 0.02;
    const startSize = 1 + startGap;
    const endSize = 1 + endGap;

    const cubeRefs = useRef([]);
    const groupRef = useRef(); // Add a ref for the group of cubes

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Start continuous rotation after initial animation
                gsap.to(groupRef.current.rotation, {
                    y: Math.PI * 2, // Rotate 360 degrees
                    x: Math.PI * 2, // Rotate 360 degrees
                    duration: 8,
                    ease: "none",
                    repeat: -1 // Infinite repeat
                });
            }
        });

        cubeRefs.current.forEach((cube, index) => {
            if (!cube) return;
            const [x, y, z] = cube.userData.originalGrid;
            tl.to(cube.position, {
                x: x * endSize,
                y: y * endSize,
                z: z * endSize,
                duration: 0.3,
                ease: 'Power',
            }, index * 0.5);
        });
    }, []);

    const cubes = [];

    let refIndex = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const position = [x * startSize, y * startSize, z * startSize];
                const currentIndex = refIndex;
                cubes.push(
                    <Box
                        key={`${x}-${y}-${z}`}
                        ref={(el) => {
                            if (el) {
                                el.userData = { originalGrid: [x, y, z] };
                                cubeRefs.current[currentIndex] = el;
                            }
                        }}
                        position={position}
                    />
                );
                refIndex++;
            }
        }
    }

    return <group ref={groupRef}>{cubes}</group>;
};

export default RubiksCube;
