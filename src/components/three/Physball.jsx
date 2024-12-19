import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Outlines, Environment, useTexture, Text } from "@react-three/drei"
import { Physics, useSphere, useBox } from "@react-three/cannon"
import { EffectComposer, N8AO, SMAA, Bloom } from "@react-three/postprocessing"
import { Scroll } from "@react-three/drei"
import { useControls } from "leva"
import { useEffect, useState } from "react";

const rfs = () => THREE.MathUtils.randFloat(-55, -25);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "#6b6c1f", roughness: 0, envMapIntensity: 0.5, metalness: 0.7 })

function TextWithPhysics(...props) {
    return (
        <Text
            position={props[0].targetPosition} // Position in 3D space [x, y, z]
            font="./assets/fonts/La-Gagliane.otf"
            fontSize={window.innerWidth < 400 ? 0.5 : 1} // Size of the text
            color="white" // Text color
            anchorX="center" // Horizontal alignment
            anchorY="middle" // Vertical alignment
        >
            Skills
        </Text>
    );
}

export function Physball(...props) {
    const [showClumps, setShowClumps] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowClumps(window.innerWidth >= 400);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <>
            {console.log("props ::", props[0].position)}
            <Physics debug gravity={[0, 2, 0]} iterations={10}>
                <Pointer targetPosition={props[0].position} />
                <Scroll >
                    {showClumps && <Clump targetPosition={props[0].position} />}
                    <TextWithPhysics text="Hello World!" targetPosition={props[0].position} />
                </Scroll>
            </Physics>
            <EffectComposer disableNormalPass multisampling={0}>
                <N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />
                {/* <Bloom mipmapBlur levels={7} intensity={1} /> */}
                <SMAA />
            </EffectComposer>
        </>
    )
}

function Clump({ targetPosition = [0, -38, 0], mat = new THREE.Matrix4(), vec = new THREE.Vector3(), ...props }) {
    console.log("props ::", props)
    const texture = useTexture("images/projects/katie-harp-SG59-rbcNRg-unsplash.jpg")
    texture.wrapT = THREE.RepeatWrapping;
    texture.wrapS = THREE.RepeatWrapping;
    const radius = THREE.MathUtils.randFloat(0.5, 0.8);
    const [ref, api] = useSphere(() => ({
        args: [radius],
        mass: 1,
        angularDamping: 0.1,
        linearDamping: 0.65,
        position: [THREE.MathUtils.randFloat(5, -5), THREE.MathUtils.randFloat(-55, -25), THREE.MathUtils.randFloat(-5, 5)]
    }))
    const instanceCount = 40;
    useFrame((state) => {
        const targetPoint = new THREE.Vector3(...targetPosition);
        for (let i = 0; i < instanceCount; i++) {
            ref.current.getMatrixAt(i, mat);
            vec.setFromMatrixPosition(mat).sub(targetPoint).normalize().multiplyScalar(-40);
            api.at(i)?.applyForce(vec.toArray(), [0, 0, 0]);
        }
    })
    return (
        <instancedMesh ref={ref} castShadow receiveShadow args={[new THREE.SphereGeometry(radius, 32, 32), baubleMaterial, instanceCount]} material-map={texture}>
            {/* <Outlines thickness={outlines} /> */}
        </instancedMesh>
    )
}

function Pointer(...props) {
    console.log("props ::",)
    const viewport = useThree((state) => state.viewport)
    const [ref, api] = useSphere(() => ({ args: [2], position: props[0].targetPosition }))
    useFrame((state) => {
        const mouseX = (state.mouse.x * viewport.width) / 2;
        const mouseY = (state.mouse.y * viewport.height) / 2;
        api.position.set(mouseX, mouseY - 40, 0);
    })
    return (
        <mesh ref={ref} scale={0.2}>
            <sphereGeometry />
            <meshBasicMaterial color={[4, 4, 4]} toneMapped={true} />
            {/* <pointLight intensity={8} distance={10} /> */}
        </mesh>
    )
}

export default Physball;
