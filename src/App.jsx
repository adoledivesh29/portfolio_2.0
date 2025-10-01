import React from 'react'
import { useEffect, useState } from 'react'
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
import Footer from './components/UI/Footer.jsx'
import Loader from './components/UI/Loader.jsx'
import Announcement from './components/UI/Announcement.jsx'

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fake API call (5s delay)
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Loader loading={loading} />
            <CursorProvider>
                {!loading &&
                    <div>
                        <Announcement />
                        <SmoothScroll />
                        <Fireflies />
                        <Navbar />
                        <Hero />
                        <About />
                        <Projects />
                        <Gallary />
                        <Skills />
                        <Timeline />
                        <Contact />
                        <Footer />
                        <SmoothFollower />
                    </div >
                }
            </CursorProvider>
        </>
    )
}

export default App
