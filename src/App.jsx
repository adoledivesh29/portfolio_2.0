import React from 'react'
import { Canvas } from '@react-three/fiber'
import Hero from './components/three/Hero.jsx'
import * as THREE from 'three'
import Navbar from './components/UI/navbar.jsx'
import { ScrollControls, Scroll, Sparkles } from '@react-three/drei'
// import Menu from './components/Menu.jsx'
import { Leva } from 'leva'
import { useControls } from 'leva'
import Cursor from './components/UI/Cursor.jsx'
import gsap from 'gsap'
import Physball from './components/three/Physball.jsx'
import About from './components/three/About.jsx'
import Projects from './components/three/Projects.jsx'
import ProjectTitle from './components/UI/ProjectTitle.jsx'
import Lights from './components/three/Lights.jsx'

const setBg = ({ gl }) => { gl.setClearColor('#000000') }

const projectsPosition = window.innerWidth < 400 ? [0, -36, 0] : [0, -25, 0];

const App = () => {
    return (
        <div>
            <Cursor />
            <Navbar />
            {/* <div className='canvas bg-black h-screen w-screen'>
                <Canvas
                    shadows
                    style={{
                        zIndex: 1,
                        width: '100%',
                        height: '100%'
                    }}
                    camera={{
                        fov: 45,
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 10]
                    }}
                    onCreated={setBg}
                >
                    <Sparkles size={2} scale={10} count={100} color='gold' />
                    <Lights /> */}
            <Hero />
            <About />
            <Projects />
            {/* <Scroll html style={{ width: '100%' }}>
                        <html>
                            <h1 className="slogan text-6xl backdrop-blur-sm text-white mt-800 mb-20 leading-slogan-leading font-customHeading text-center pointer-events-none">Innovating Interfaces with Precision</h1>
                            <About />
                        </html>
                        <ProjectTitle />
                    </Scroll> */}
            {/* <Projects position={projectsPosition} />
                    <Physball position={window.innerWidth < 400 ? [0, -50, 0] : [0, -38, 0]} /> */}
            {/* </Canvas> */}
            {/* </div> */}
        </div >
    )
}

export default App
