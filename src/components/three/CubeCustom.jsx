import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SpotLight } from '@react-three/drei'
import RubiksCube from './RubiksCube';

const CubeCustom = () => {
    return (<Canvas
        camera={{ position: [5, 5, 5], fov: 50 }}
        className='contact-canvas'
        color="white"
    >

        {/* <OrbitControls /> */}
        <SpotLight
            position={[-5, 5, 0]}
            angle={Math.PI / 4}
            penumbra={0.8}
            decay={1}
            distance={20}
            color="#ff0000"
            intensity={10}
            castShadow
            radius={10} // Increased radius
        />
        <SpotLight
            position={[5, 5, 0]}
            angle={Math.PI / 4}
            penumbra={0.8}
            decay={2}
            distance={20}
            color="#0000ff"
            intensity={50}
            castShadow
            radius={10} // Increased radius
        />
        <RubiksCube />
    </Canvas>
    );
};

export default CubeCustom;
