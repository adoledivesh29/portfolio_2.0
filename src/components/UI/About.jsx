import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(TextPlugin, ScrollTrigger)

const About = () => {
    const titleRef = useRef(null)

    useEffect(() => {
        const h2 = titleRef.current
        if (!h2) return

        const fullText = h2.textContent.trim()
        h2.textContent = '' // start blank so the type-on effect works

        const ctx = gsap.context(() => {
            gsap.to(h2, {
                scrollTrigger: {
                    trigger: h2,
                    start: 'top 85%',
                },
                text: { value: fullText, delimiter: '' },
                duration: 1.5,
                ease: 'none',
            })
        })

        return () => {
            ctx.revert()
            h2.textContent = fullText // restore for HMR
        }
    }, [])

    return (
        <section className="about-section" id="about">
            <div className="about-shell">
                <div className="about-eyebrow-wrap">
                    <span className="about-eyebrow">ABOUT ME</span>
                    <div className="about-top-divider" aria-hidden="true">
                        <span className="about-top-divider__line" />
                        <span className="about-top-divider__spark" />
                        <span className="about-top-divider__line" />
                    </div>
                </div>

                <h2 className="about-title" ref={titleRef}>Hi, I am Divesh</h2>

                <div className="about-center-ornament" aria-hidden="true">
                    <span className="about-center-ornament__line" />
                    <span className="about-center-ornament__star" />
                    <span className="about-center-ornament__line" />
                </div>

                <p className="about-copy" aria-label="About Divesh">
                    I am a creative frontend developer with 3+ years of experience in building
                    interactive, responsive interfaces. Skilled in React.js, Next.js, and Node.js,
                    with a focus on performance and creating immersive experiences.
                </p>
            </div>
        </section>
    )
}

export default About
