import React from 'react'
import OptionsContainer from './OptionsContainer'

const Gallary = () => {
    return (
        <div id="gallery" className='gallary'>
            <div className="about-eyebrow-wrap">
                <span className="about-eyebrow">VISUAL DIARY</span>
                <div className="about-top-divider" aria-hidden="true">
                    <span className="about-top-divider__line" />
                    <span className="about-top-divider__spark" />
                    <span className="about-top-divider__line" />
                </div>
            </div>
            <h2 className='project-subTitle'>Creative snapshots that reflect my perspective and passion for photography.</h2>
            <OptionsContainer />
        </div>
    )
}

export default Gallary
