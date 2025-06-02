import React from 'react'
import CubeCustom from '../three/CubeCustom'

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-background">
                <CubeCustom />
            </div>
            <div className="text-content">
                <h1 className="text-4xl font-bold">Let's Make Pixels Talk</h1>
                <p className="description">
                    From code to canvas, I love collaborating. Fill out the form or shoot me a message — let's bring your ideas to life.
                </p>
            </div>
        </div>
    )
}

export default Contact