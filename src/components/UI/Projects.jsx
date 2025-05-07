import React from 'react';
import SpotlightCard from '../../custom/SpotlightCard';
import b1 from '../../assets/images/projects/b1.png'
import ShinyText from '../../custom/ShinyText'
import Title from './Title'

export default function Projects() {
    return (
        <div className='project-section'>
            <Title title={"Projects"} />
            <div className='card-wrap'>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(188, 174, 19, 0.33)">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            rx="8"
                            ry="8"
                            className="line"
                            height="100%"
                            width="100%"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="up">
                        <img src={b1} alt="" />
                    </div>
                    <div className="down">
                        <h1>BE1 Games</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, modi! Impedit quae at, ab odit magnam ullam iure nam aliquam a itaque non pariatur fugit ut doloribus deserunt adipisci eos beatae labore amet quidem veniam facere.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(188, 174, 19, 0.33)">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            rx="8"
                            ry="8"
                            className="line"
                            height="100%"
                            width="100%"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="up">
                        <img src={b1} alt="" />
                    </div>
                    <div className="down">
                        <h1>BE1 Games</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, modi! Impedit quae at, ab odit magnam ullam iure nam aliquam a itaque non pariatur fugit ut doloribus deserunt adipisci eos beatae labore amet quidem veniam facere.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(188, 174, 19, 0.33)">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            rx="8"
                            ry="8"
                            className="line"
                            height="100%"
                            width="100%"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="up">
                        <img src={b1} alt="" />
                    </div>
                    <div className="down">
                        <h1>BE1 Games</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, modi! Impedit quae at, ab odit magnam ullam iure nam aliquam a itaque non pariatur fugit ut doloribus deserunt adipisci eos beatae labore amet quidem veniam facere.</p>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(188, 174, 19, 0.33)">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            rx="8"
                            ry="8"
                            className="line"
                            height="100%"
                            width="100%"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="up">
                        <img src={b1} alt="" />
                    </div>
                    <div className="down">
                        <h1>BE1 Games</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, modi! Impedit quae at, ab odit magnam ullam iure nam aliquam a itaque non pariatur fugit ut doloribus deserunt adipisci eos beatae labore amet quidem veniam facere.</p>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    )
}