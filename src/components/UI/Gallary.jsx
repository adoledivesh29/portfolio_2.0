import React from 'react'
import Title from './Title'
import OptionsContainer from './OptionsContainer'

const Gallary = () => {
    return (
        <div className='gallary'>
            <Title title={"Visual Diary"} />
            <h2 className='project-subTitle'>Creative snapshots that reflect my perspective and passion for photography.</h2>
            <OptionsContainer />
        </div>
    )
}

export default Gallary
