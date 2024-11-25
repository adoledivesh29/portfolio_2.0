import { forwardRef } from 'react'

const Lights = forwardRef(function Lights(props, ref) {
    return <>
        <directionalLight
            ref={ref}
            castShadow
            position={[4, 4, 1]}
            intensity={10}
            color="yellow"
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={10}
            shadow-camera-right={10}
            shadow-camera-bottom={- 10}
            shadow-camera-left={- 10}
        />
        <ambientLight ref={ref} intensity={10} />
        <hemisphereLight ref={ref} intensity={10} />
    </>
})

export default Lights