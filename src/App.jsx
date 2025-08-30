import React from 'react'
import Hero from './components/three/Hero.jsx'
import Navbar from './components/UI/navbar.jsx'
import About from './components/UI/About.jsx'
import Projects from './components/UI/Projects.jsx'
import Gallary from './components/UI/Gallary.jsx'
import Fireflies from './components/three/Fireflies.jsx'
import SmoothFollower from './custom/SmoothFollower.jsx'
import { CursorProvider } from './contexts/CursorContext.js'
import Skills from './components/UI/Skills.jsx'
import Timeline from './components/UI/Timeline.jsx'
import Contact from './components/UI/Contact.jsx'
import SmoothScroll from './custom/SmoothScroll.jsx'
const App = () => {
    return (
        <CursorProvider>
            <div>
                <SmoothScroll />
                <Fireflies />
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
                <Gallary />
                <Skills />
                <Timeline />
                <Contact />
                {/* <Scroll html style={{ width: '100%' }}>
                        <html>
                        <h1 className="slogan text-6xl backdrop-blur-sm text-white mt-800 mb-20 leading-slogan-leading font-customHeading text-center pointer-events-none">Innovating Interfaces with Precision</h1>
                        <About />
                        </html>
                        <Title />
                        </Scroll> */}
                {/* <Projects position={projectsPosition} />
                    <Physball position={window.innerWidth < 400 ? [0, -50, 0] : [0, -38, 0]} /> */}
                {/* </Canvas> */}
                {/* </div> */}
                <SmoothFollower />
            </div >
        </CursorProvider>
    )
}

export default App
