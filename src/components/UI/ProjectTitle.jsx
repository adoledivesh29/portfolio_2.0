import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const ProjectTitle = () => {
    const underlineRef = useRef(null)
    const [ref, inView] = useInView({
        threshold: 1,
        triggerOnce: true
    })

    useEffect(() => {
        if (inView) {
            gsap.fromTo(underlineRef.current,
                {
                    width: '0px',
                    left: '0',
                },
                {
                    width: '220px',
                    duration: 2,
                    ease: 'power2.out'
                }
            )
        }
    }, [inView])

    return (
        <div ref={ref} className="project-title-container relative">
            <h1 className='text-white text-4xl font-bold font-customHeading text-center pt-40'>Projects</h1>
            <div className="relative w-[220px] mx-auto">
                <span
                    ref={underlineRef}
                    className="absolute h-[2px] bg-white mt-2 w-0"
                ></span>
            </div>
        </div>
    )
}

export default ProjectTitle 