import { MeshTransmissionMaterial, useGLTF, OrbitControls } from '@react-three/drei'
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { useTexture, Float } from '@react-three/drei';
import { useControls } from 'leva';
import { ScrollControls, Scroll } from '@react-three/drei'


const rfs = THREE.MathUtils.randFloatSpread

export default function Projects({ ...props }) {

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

    const { nodes, materials } = useGLTF('/models/glass_card_3.glb')
    const infoPlane = nodes.Plane001;

    const B1 = useTexture('/images/projects/b1.png');
    const typerium = useTexture('/images/projects/typerium.png');
    const furniture = useTexture('/images/projects/furniture.png');

    useEffect(() => {
        [B1, typerium, furniture].forEach(texture => {
            texture.rotation = Math.PI / 2;
            texture.center.set(0.5, 0.5);
            texture.repeat.set(-1, 1);
        });
    }, [B1, typerium, furniture]);

    return (
        <>
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <ambientLight intensity={0.5} />
            <Scroll>
                <group position={props.position}>
                    {/* Top Card */}
                    <Float
                        speed={randomFloats.top.speed}
                        rotationIntensity={randomFloats.top.rotationIntensity}
                        floatIntensity={randomFloats.top.floatIntensity}
                    >
                        <group position={[-2.5, 5, 0]} scale={2}>
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
                        <group position={[2.5, 0, 0]} scale={2}>
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
                        <group position={[-2.5, -5, 0]} scale={2}>
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
            </Scroll>
        </>
    )
}

useGLTF.preload('/models/glass_card_3.glb')