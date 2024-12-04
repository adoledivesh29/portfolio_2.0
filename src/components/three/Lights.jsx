import { forwardRef } from 'react'
import { useControls } from 'leva'

const Lights = forwardRef(function Lights(props, ref) {
    // const { directionalPosition, ambientIntensity, hemisphereIntensity } = useControls('Lights', {
    //     directionalPosition: {
    //         value: [4, 4, 1],
    //         step: 0.1,
    //     },
    //     ambientIntensity: {
    //         value: 10,
    //         min: 0,
    //         max: 20,
    //         step: 0.1,
    //     },
    //     hemisphereIntensity: {
    //         value: 10,
    //         min: 0,
    //         max: 20,
    //         step: 0.1,
    //     }
    // })

    return <>
        <directionalLight
            ref={ref}
            castShadow
            position={[4, 4, 1]}
            intensity={3}
            color="white"
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={1}
            shadow-camera-far={10}
            shadow-camera-top={10}
            shadow-camera-right={10}
            shadow-camera-bottom={- 10}
            shadow-camera-left={- 10}
        />
        <ambientLight ref={ref} intensity={3} />
        <hemisphereLight ref={ref} intensity={3} />
    </>
})

export default Lights