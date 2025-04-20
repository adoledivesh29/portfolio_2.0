import { MeshTransmissionMaterial, useGLTF, OrbitControls } from '@react-three/drei'
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useTexture, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import ScrollFloat from '../../custom/ScrollFloat';

const rfs = THREE.MathUtils.randFloatSpread

// Create a new component for the cards
function Cards({ position }) {
    const { nodes, materials } = useGLTF('/models/glass_card_3.glb')
    const infoPlane = nodes.Plane001;

    const B1 = useTexture('/images/projects/b1.png');
    const typerium = useTexture('/images/projects/typerium.png');
    const furniture = useTexture('/images/projects/furniture.png');

    const randomFloats = {
        top: {
            speed: 2 + Math.random(),
            rotationIntensity: 0.3 + Math.random() * 0.5,
            floatIntensity: 0.2 + Math.random() * 0.4
        },
        middle: {
            speed: 2 + Math.random(),
            rotationIntensity: 0.3 + Math.random() * 0.5,
            floatIntensity: 0.2 + Math.random() * 0.4
        },
        bottom: {
            speed: 2 + Math.random(),
            rotationIntensity: 0.3 + Math.random() * 0.5,
            floatIntensity: 0.2 + Math.random() * 0.4
        }
    };

    const config = {
        meshPhysicalMaterial: false,
        transmissionSampler: false,
        backside: false,
        samples: 16,
        resolution: 2048,
        transmission: 1,
        roughness: 0.0,
        thickness: 3.5,
        ior: 1.5,
        chromaticAberration: 0.06,
        anisotropy: 0.1,
        distortion: 0.0,
        distortionScale: 0.3,
        temporalDistortion: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        attenuationDistance: 0.5,
        attenuationColor: '#a59e9e',
        color: '#a59e9e',
        bg: '#a59e9e',
        bevelSize: 0.05,
        bevelSegments: 5,
    }

    const isMobile = window.innerWidth < 768;
    const topPosition = isMobile ? [0, 5, 0] : [-1.5, 2.5, 0];
    const middlePosition = isMobile ? [0, 0, 0] : [1.5, 0, 0];
    const bottomPosition = isMobile ? [0, -5, 0] : [-1.5, -2.5, 0];

    useEffect(() => {
        [B1, typerium, furniture].forEach(texture => {
            texture.rotation = Math.PI / 2;
            texture.center.set(0.5, 0.5);
            texture.repeat.set(-1, 1);
        });
    }, [B1, typerium, furniture]);

    return (
        <group position={position}>
            {/* Top Card */}
            <Float
                speed={randomFloats.top.speed}
                rotationIntensity={randomFloats.top.rotationIntensity}
                floatIntensity={randomFloats.top.floatIntensity}
            >
                <group position={topPosition} scale={1.1}>
                    <mesh geometry={nodes.Plane.geometry} rotation={[0, -Math.PI / 2, 0]} side={THREE.DoubleSide}>
                        <MeshTransmissionMaterial {...config} />
                    </mesh>
                    <mesh geometry={infoPlane.geometry} position={infoPlane.position} rotation={[0, -Math.PI / 2, 0]} side={THREE.DoubleSide}>
                        <meshStandardMaterial
                            map={B1}
                            roughness={0.8}
                            metalness={0.7}
                            clearcoat={1}
                            clearcoatRoughness={0.2}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Middle Card */}
            <Float
                speed={randomFloats.middle.speed}
                rotationIntensity={randomFloats.middle.rotationIntensity}
                floatIntensity={randomFloats.middle.floatIntensity}
            >
                <group position={middlePosition} scale={1.1}>
                    <mesh geometry={nodes.Plane.geometry} rotation={[0, -Math.PI / 2, 0]} side={THREE.DoubleSide}>
                        <MeshTransmissionMaterial {...config} />
                    </mesh>
                    <mesh geometry={infoPlane.geometry} position={infoPlane.position} rotation={[0, -Math.PI / 2, 0]} side={THREE.DoubleSide}>
                        <meshStandardMaterial
                            map={typerium}
                            roughness={0.8}
                            metalness={0.7}
                            clearcoat={1}
                            clearcoatRoughness={0.2}
                        />
                    </mesh>
                </group>
            </Float>

            {/* Bottom Card */}
            <Float
                speed={randomFloats.bottom.speed}
                rotationIntensity={randomFloats.bottom.rotationIntensity}
                floatIntensity={randomFloats.bottom.floatIntensity}
            >
                <group position={bottomPosition} scale={1.1}>
                    <mesh geometry={nodes.Plane.geometry} rotation={[0, -Math.PI / 2, 0]} side={THREE.DoubleSide}>
                        <MeshTransmissionMaterial {...config} />
                    </mesh>
                    <mesh geometry={infoPlane.geometry} position={infoPlane.position} rotation={[0, -Math.PI / 2, 0]} side={THREE.DoubleSide}>
                        <meshStandardMaterial
                            map={furniture}
                            roughness={0.8}
                            metalness={0.7}
                            clearcoat={1}
                            clearcoatRoughness={0.2}
                        />
                    </mesh>
                </group>
            </Float>
        </group>
    );
}

export default function Projects({ ...props }) {
    return (
        <div className='project-section'>

            <ScrollFloat
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
                className='title-project'
            >
                Work
            </ScrollFloat>
            {/* <div className='title-project'>
                <span>Work</span>
            </div> */}
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 10]
                }}
                className='project-canvas'
            >
                <ambientLight intensity={6} />
                <Suspense>
                    <Cards position={props.position} />
                </Suspense>
            </Canvas>
        </div>
    )
}

useGLTF.preload('/models/glass_card_3.glb')