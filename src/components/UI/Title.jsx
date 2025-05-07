import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

const Title = ({ title }) => {
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
        <div ref={ref} className="mb-10 title">
            <h1 className='text-white text-6xl font-bold font-customHeading'>{title}</h1>
        </div>
    )
}

export default Title 