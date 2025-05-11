import React from 'react'
import ScrollFloat from '../../custom/ScrollFloat'
import ScrollReveal from '../../custom/ScrollReveal'
import BlurText from '../../custom/BlurText'

const About = () => {
    return (
        <div className='about-section'>
            <h1 className='text-white text-6xl text-center font-customHeading pt-12'>
                Hi,
            </h1>
            <BlurText
                text="I am Divesh"
                delay={50}
                animateBy="words"
                direction="top"
                specialCharStyle={{ color: '#ff0000' }}
                className="text-white text-6xl text-center font-customHeading pt-5" />
            <div className="about-para">
                <BlurText
                    text="Frontend Developer with over two years of experience crafting interactive, responsive interfaces. Skilled in React, Three.js, and Phaser, with a focus on performance and creating immersive experiences."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-white text-[32px] text-justify font-customPara pt-12 max-w-6xl"
                />
            </div>
        </div >
    )
}

export default About
