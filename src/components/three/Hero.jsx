import { Canvas } from '@react-three/fiber'
import ParticleModel from './ParticleModel.jsx';
import { Suspense, useEffect, useRef } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import gsap from 'gsap';

const setBg = ({ gl }) => { gl.setClearColor('#000000') }

export default function Hero() {
    const backgroundTextRef = useRef(null);
    const foregroundTextRef = useRef(null);

    useEffect(() => {
        // Animation for the background text (Innovative)
        gsap.fromTo(backgroundTextRef.current,
            {
                x: '-100%',
                opacity: 0
            },
            {
                x: '0%',
                opacity: 1,
                duration: 1.5,
                ease: "power4.out"
            }
        );

        // Animation for the foreground text (Elegance)
        gsap.fromTo(foregroundTextRef.current,
            {
                x: '100%',
                opacity: 0
            },
            {
                x: '0%',
                opacity: 1,
                duration: 1.5,
                ease: "power4.out"
            }
        );
    }, []);

    return (
        <div className='hero-section'>
            <div ref={backgroundTextRef} className='background-text left'>Innovative</div>
            <div ref={foregroundTextRef} className='foreground-text right'>Elegance</div>
            <Canvas
                shadows
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 10]
                }}
                // onCreated={setBg}
                className='hero-canvas'
            >
                <EffectComposer>
                    <Bloom />
                </EffectComposer>
                <Suspense fallback={null}>
                    <ParticleModel
                        scale={1000}
                        rotation={[0, 5.3, 0]}
                        position={[0, -0.5, 0]}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}