import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

const Fireflies = () => {
    return (
        <div className='fireFlies'>
            <Canvas
                camera={{ position: [0, 0, 30], fov: 75 }}
                style={{ background: 'transparent' }}
            >
                <Sparkles
                    count={200}
                    scale={[50, 50, 50]}
                    size={4}
                    speed={0.4}
                    color="#ffffff"
                />
            </Canvas>
        </div>
    )
}
export default Fireflies