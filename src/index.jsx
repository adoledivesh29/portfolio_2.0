import './styles.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import * as THREE from 'three'
import Navbar from './components/navbar.jsx'
import Menu from './components/Menu.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))


const setBg = ({ gl }) => { gl.setClearColor('#000000') }
root.render(
    <>
        <Navbar />
        <div className='canvas'>

            <Canvas
                shadows
                style={{ zIndex: 1 }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2.5, 4, 6]
                }}
                onCreated={setBg}
            >
                <Experience />
            </Canvas>
        </div>
        <Menu />
    </>
)