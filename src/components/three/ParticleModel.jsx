import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { FlowFieldParticles } from '../../custom/FlowFieldParticles.jsx'


export default function ParticleModel(props) {
    const { nodes, materials } = useGLTF('/models/deer.glb')
    return (
        <group group {...props} dispose={null} >
            <group scale={0.01}>
                <FlowFieldParticles size={0.3} disturbIntensity={0.18} lightRef={props.lightRef}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.deer1_material_1_0.geometry}
                        material={materials.material_1}
                    />
                </FlowFieldParticles>
            </group>
        </group >
    )
}

useGLTF.preload('/models/deer.glb')