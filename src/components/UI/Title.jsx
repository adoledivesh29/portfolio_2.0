import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import DecryptedText from '../../custom/DecryptedText'

const Title = ({ title }) => {
    const topLineRef = useRef(null)
    const bottomLineRef = useRef(null)
    const textWrapperRef = useRef(null)
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            // Animate top line
            gsap.fromTo(topLineRef.current,
                {
                    width: '0px',
                    left: '0',
                },
                {
                    width: '42px',
                    duration: 1.5,
                    ease: 'power2.out'
                }
            )

            // Need to wait for DecryptedText to finish rendering
            // before measuring its width
            setTimeout(() => {
                const textWidth = textWrapperRef.current.offsetWidth;

                // Animate bottom line to be slightly wider than text
                gsap.fromTo(bottomLineRef.current,
                    {
                        width: '0px',
                        left: '0',
                    },
                    {
                        width: textWidth * 1.1 + 'px',
                        duration: 2,
                        ease: 'power2.out'
                    }
                )
            }, 300); // Give some time for the text to be fully rendered
        }
    }, [inView])

    return (
        <div ref={ref} className="mb-10 title">
            <div
                ref={topLineRef}
                className="h-1 w-0 bg-[#c50000] rounded mb-5"
            ></div>
            {/* <h1 className='text-white text-6xl font-bold font-customHeading'>{title}</h1> */}
            <div ref={textWrapperRef} className="inline-block">
                <DecryptedText
                    text={title}
                    speed={100}
                    maxIterations={200}
                    sequential={true}
                    characters="ABCD1234!?"
                    className="revealed text-white text-6xl font-bold font-customHeading"
                    parentClassName="all-letters"
                    animateOn="view"
                    encryptedClassName="encrypted text-white text-6xl font-bold font-customHeading"
                />
            </div>
            <div
                ref={bottomLineRef}
                className="h-1 w-0 bg-[#c50000] rounded mt-5 relative"
            ></div>
        </div>
    )
}

export default Title 