import React from 'react';
import SpotlightCard from '../../custom/SpotlightCard';
import b1 from '../../assets/images/projects/b1.png'
import typerium from '../../assets/images/projects/typerium.png'
import WoodWave from '../../assets/images/projects/WoodWave.png'
import ShinyText from '../../custom/ShinyText'
import { useState } from 'react'
import { Edit, Search, Play, Link } from 'lucide-react';
import Title from './Title'
import { useMouse } from '../../hooks/useMouse'
import { useCursor } from '../../contexts/CursorContext';
import projectsData from '../../data/projectsData';


export default function Projects() {
    const { setVariant } = useCursor();
    const [mouseState, ref] = useMouse();
    const [cursorContent, setCursorContent] = useState(null);
    const icons = {
        edit: <Edit size={16} />,
        search: <Search size={16} />,
        play: <Play size={16} />,
        link: <Link size={16} />,
    };

    // Map image paths to imported images
    const imageMap = {
        "/src/assets/images/projects/WoodWave.png": WoodWave,
        "/src/assets/images/projects/Typerium.png": typerium,
        "/src/assets/images/projects/b1.png": b1
    };

    return (
        <div className='project-section' ref={ref} id='projects'>
            {mouseState.x !== null && mouseState.y !== null && (
                <div
                    className="fixed pointer-events-none z-50"
                    style={{
                        left: mouseState.x,
                        top: mouseState.y,
                        transform: 'translate(-50%, -50%)',
                    }}>

                    {cursorContent && (
                        <div
                            className="absolute left-6 top-0 text-white px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-2 text-sm customPara"
                            style={{
                                animation: 'fadeIn 0.3s ease-out',
                                transform: 'translate(-100%, -50%)'
                            }}>
                            {typeof cursorContent === 'string'
                                ? cursorContent
                                : icons[cursorContent]}
                        </div>
                    )}
                </div>
            )}
            <Title title={"Projects"} />
            <h2 className='project-subTitle'>From concept to code, here are some things I've built recently.</h2>
            <div className='card-wrap'>
                {projectsData.map((project, index) => (
                    <SpotlightCard
                        key={index}
                        className="custom-spotlight-card cursor-pointer"
                        spotlightColor="rgba(188, 174, 19, 0.33)"
                    >
                        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"
                            onMouseOver={() => {
                                setCursorContent('Visit')
                                setVariant('card')
                            }}
                            onMouseOut={() => {
                                setCursorContent(null)
                                setVariant('default')
                            }}
                        >
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
                            <img src={imageMap[project.imagePath]} alt={project.name} />
                        </div>
                        <div className="down">
                            <h1>{project.name}</h1>
                            <p>{project.description}</p>
                            <div className="techStacks">
                                {project.technologies.map((obj) => (
                                    <ShinyText key={obj} text={obj} disabled={false} speed={3} className='tech' />
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    )
}