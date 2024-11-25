import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Lights from './Lights.jsx'
import Ocean from './Ocean.jsx'
import ParticleModel from './ParticleModel.jsx'
import { forwardRef } from 'react'
import { Leva } from 'leva'
import { useControls } from 'leva'
import { useRef } from "react"
import { EffectComposer } from '@react-three/postprocessing'
import { Bloom } from '@react-three/postprocessing'
import { Html } from '@react-three/drei'

export default function Experience() {
    const directionalLightRef = useRef()

    return <>
        <EffectComposer>
            <Bloom />
        </EffectComposer>
        {/* <OrbitControls makeDefault /> */}
        <Lights ref={directionalLightRef} />
        <ParticleModel scale={1000} rotation={[0, 5.3, 0]} position={[0, 0, 0]} lightRef={directionalLightRef} />
        {/* <Ocean /> */}
    </>
}   