import React from 'react'
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls, Scroll } from '@react-three/drei'
import galience from '../../assets/fonts/La-Gagliane.otf'

// Define a user-defined array of strings
const predefinedWords = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Three.js', 'React Three Fiber', 'Phaser.io', 'Websocket',
    'Git', 'Github', 'Tailwind', 'Material UI'
];



function Skills(...props) {
    const groupRef = useRef();
    const randomDirection = useMemo(() => {
        return {
            x: Math.random() < 0.5 ? 1 : -1, // Randomly choose direction for X-axis
            y: Math.random() < 0.5 ? 1 : -1, // Randomly choose direction for Y-axis
        };
    }, []);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        // Update the rotation of the group for revolving effect
        groupRef.current.rotation.x += randomDirection.x * 0.001; // Constant speed
        groupRef.current.rotation.y += randomDirection.y * 0.001; // Constant speed
    });
    return (
        <>
            <Scroll>
                {/* <fog attach="fog" args={['#202025', 0, 80]} /> */}
                <Suspense fallback={null}>
                    {/* <group rotation={[10, 10.5, 10]} position={[0, 0, 0]}>
                        <Cloud count={3} radius={0.2} />
                    </group> */}
                    {console.log("props positions ::", props[0].position)}
                    <group ref={groupRef} rotation={[10, 10.5, 10]} position={props[0].position}>
                        {console.log("positions", props[0].position)}
                        <Cloud count={4} radius={3} />
                    </group>
                </Suspense>
                {/* <TrackballControls /> */}
            </Scroll>
        </>
    )
}

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: galience, fontSize: 0.25, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover¨
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        ref.current.material.color.lerp(color.set(hovered ? '#BB8451' : 'white'), 0.1)
    })
    return (
        <Billboard {...props}>
            <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} children={children} />
        </Billboard>
    )
}

function Cloud({ count = 4, radius = 20 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++)
                temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), predefinedWords[(i * count + j) % predefinedWords.length]]) // Use words from the predefined array
        return temp
    }, [count, radius]) // No need for wordsArray dependency now
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default Skills
