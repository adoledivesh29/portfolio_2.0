import React, { useState } from 'react';
import OptionCard from './OptionCard';

const options = [
    {
        icon: 'fas fa-walking',
        main: 'Blonkisoaz',
        sub: 'Omuke trughte a otufta',
        background: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg'
    },
    {
        icon: 'fas fa-snowflake',
        main: 'Oretemauw',
        sub: 'Omuke trughte a otufta',
        background: 'https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg'
    },
    {
        icon: 'fas fa-tree',
        main: 'Iteresuselle',
        sub: 'Omuke trughte a otufta',
        background: 'https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg'
    },
    {
        icon: 'fas fa-tint',
        main: 'Idiefe',
        sub: 'Omuke trughte a otufta',
        background: 'https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg'
    },
    {
        icon: 'fas fa-sun',
        main: 'Inatethi',
        sub: 'Omuke trughte a otufta',
        background: 'https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg'
    }
];

export default function OptionsContainer() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="options">
            {options.map((option, index) => (
                <OptionCard
                    key={index}
                    {...option}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
}
