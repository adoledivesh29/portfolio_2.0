import React from 'react'
import ScrollFloat from '../../custom/ScrollFloat'

const About = () => {
    return (
        <div className='about-section'>
            <h1 className='text-white text-6xl text-center font-customHeading pt-12'>
                Hi,
            </h1>
            <ScrollFloat>
                I am Divesh
            </ScrollFloat>
            <ScrollFloat
                containerClassName='mt-10 px-24'
                textClassName='text-[32px] font-customPara'
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=50%'
                scrollEnd='bottom bottom-=40%'
                stagger={0.03}
            >
                Frontend Developer with over two years of experience crafting interactive, responsive interfaces. Skilled in React, Three.js, and Phaser, with a focus on performance and creating immersive experiences.
            </ScrollFloat>
        </div >
    )
}

export default About
