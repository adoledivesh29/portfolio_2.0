import './styles.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import * as THREE from 'three'
import Navbar from './components/navbar.jsx'
// import Menu from './components/Menu.jsx'
import { Leva } from 'leva'
import { useControls } from 'leva'
import Cursor from './components/Cursor.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const setBg = ({ gl }) => { gl.setClearColor('#000000') }
root.render(
    <>
        <Cursor />
        <Navbar />
        <div className='canvas'>
            <Canvas
                shadows
                style={{ zIndex: 1 }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 10]
                }}
                onCreated={setBg}
            >
                <Experience />
            </Canvas>
        </div>
        <h1 className="slogan text-6xl text-white pt-34rem font-custom text-center">Innovating Interfaces with Precision</h1>
    </>
)