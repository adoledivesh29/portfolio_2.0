import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Outlines, Environment, useTexture } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, N8AO, SMAA, Bloom } from "@react-three/postprocessing"
import { Scroll } from "@react-three/drei"
import { useControls } from "leva"

const rfs = () => THREE.MathUtils.randFloat(-55, -25);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "white", roughness: 0, envMapIntensity: 1, metalness: 0.7 })

export function Physball(...props) {
    return (
        <>
            <Physics debug gravity={[0, 2, 0]} iterations={10}>
                <Pointer />
                <Scroll>
                    <Clump targetPosition={props.position} />
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
    const { outlines } = useControls({ outlines: { value: 0.0, step: 0.01, min: 0, max: 0.05 } })
    const texture = useTexture("images/projects/cross.jpg")
    const [ref, api] = useSphere(() => ({ args: [0.5], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [THREE.MathUtils.randFloat(5, -5), THREE.MathUtils.randFloat(-55, -25), THREE.MathUtils.randFloat(-5, 5)] }))
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
        <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, instanceCount]} material-map={texture}>
            {/* <Outlines thickness={outlines} /> */}
        </instancedMesh>
    )
}

function Pointer() {
    const viewport = useThree((state) => state.viewport)
    const [ref, api] = useSphere(() => ({ args: [35], position: [0, -35, 0] }))
    useFrame((state) => {
        const mouseX = (state.mouse.x * viewport.width) / 2;
        const mouseY = (state.mouse.y * viewport.height) / 2;
        api.position.set(mouseX, mouseY, 0);    
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
