import React, { useEffect, useState, useRef } from 'react';
import Title from '../UI/Title'
import aws from '../../assets/images/icons/aws.svg'
import css3 from '../../assets/images/icons/css3.svg'
import figma from '../../assets/images/icons/figma.svg'
import github from '../../assets/images/icons/github.svg'
import html5 from '../../assets/images/icons/html5.svg'
import javascript from '../../assets/images/icons/javascript.svg'
import jenkins from '../../assets/images/icons/jenkins.svg'
import materialUI from '../../assets/images/icons/materialUI.svg'
import nextjs from '../../assets/images/icons/nextjs.svg'
import nodejs from '../../assets/images/icons/nodejs.svg'
import react from '../../assets/images/icons/react.svg'
import redux from '../../assets/images/icons/redux.svg'
import threejs from '../../assets/images/icons/threejs.svg'
import typescript from '../../assets/images/icons/typescript.svg'
import tailwind from '../../assets/images/icons/tailwind.svg'
import vite from '../../assets/images/icons/vite.svg'
import webpack from '../../assets/images/icons/webpack.svg'
import websocket from '../../assets/images/icons/websocket.svg'
import phaser from '../../assets/images/icons/phaser.png'

const gridData = [
    [ // column 2
        { index: 3, icon: html5, tech: 'HTML' },
        { index: 4, icon: css3, tech: 'CSS' },
        { index: 5, icon: javascript, tech: 'Javascript' },
    ],
    [ // column 3
        { index: 3, icon: typescript, tech: 'Typescript' },
        { index: 4, icon: react, tech: 'React' },
        { index: 5, icon: nextjs, tech: 'Next.js' },
        { index: 6, icon: threejs, tech: 'Three.js' },
    ],
    [ // column 4
        { index: 3, icon: redux, tech: 'Redux' },
        { index: 4, icon: phaser, tech: 'Phaser 3' },
        { index: 5, icon: nodejs, tech: 'Node.js' },
        { index: 6, icon: github, tech: 'Git/Github' },
        { index: 7, icon: tailwind, tech: 'Tailwind' },
    ],
    [ // column 5
        { index: 3, icon: aws, tech: 'AWS' },
        { index: 4, icon: webpack, tech: 'Webpack' },
        { index: 5, icon: figma, tech: 'Figma' },
        { index: 6, icon: vite, tech: 'Vite' },
    ],
    [ // column 6
        { index: 3, icon: websocket, tech: 'websocket' },
        { index: 4, icon: jenkins, tech: 'jenkins' },
        { index: 5, icon: materialUI, tech: 'Material UI' },
    ]
];


const Skills = () => {
    const [currentSkill, setCurrentSkill] = useState("Skills");
    const leaveTimeout = useRef(null);
    const skillTitleRef = useRef(null);

    const handleMouseEnter = (skill) => {
        if (leaveTimeout.current) {
            clearTimeout(leaveTimeout.current);
            leaveTimeout.current = null;
        }
        setCurrentSkill(skill);
    };

    const handleMouseLeave = (event) => {
        // Check if mouse is going to another hexagon
        const relatedTarget = event.relatedTarget;
        if (relatedTarget && relatedTarget.classList.contains('hexagon')) {
            return; // Skip if moving to another hexagon
        }

        leaveTimeout.current = setTimeout(() => {
            setCurrentSkill("Skills");
        }, 100);
    };

    useEffect(() => {
        if (skillTitleRef.current) {
            skillTitleRef.current.classList.add('fade-in');
            const timeout = setTimeout(() => {
                skillTitleRef.current.classList.remove('fade-in');
            }, 300);
            return () => clearTimeout(timeout);
        }
    }, [currentSkill]);

    // Add this effect to trigger a re-render of the Title component
    useEffect(() => {
        // This will cause the Title component to re-render
    }, [currentSkill]);

    return (
        <div className="skills">
            <div className="skills-container" id="container">
                {gridData.map((column, colIndex) => (
                    <div className="column" style={{ '--column': colIndex + 2 }} key={colIndex}>
                        {column.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className="hexagon"
                                style={{
                                    '--index': item.index,
                                }}
                                onMouseEnter={() => handleMouseEnter(item.tech)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.icon && <img src={item.icon} alt={item.tech} className="icon-img" />}
                            </div>

                        ))}
                    </div>
                ))}
            </div>
            <div className="skill-title" ref={skillTitleRef}>
                <Title title={currentSkill} />
            </div>

        </div>
    );
};


export default Skills;
