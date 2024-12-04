import { ScrollControls, useScroll, Scroll } from '@react-three/drei';
import Lights from './Lights.jsx';
import Ocean from './Ocean.jsx';
import ParticleModel from './ParticleModel.jsx';
import { useRef, useLayoutEffect, Suspense } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';

export default function Hero() {
    return (
        <>
            <EffectComposer>
                <Bloom />
            </EffectComposer>
            <Scroll>
                <Suspense fallback={null}>
                    <ParticleModel
                        scale={1000}
                        rotation={[0, 5.3, 0]}
                        position={[0, 0, 0]}
                    />
                </Suspense>
            </Scroll>
            {/* <Ocean /> */}
        </>
    );
}