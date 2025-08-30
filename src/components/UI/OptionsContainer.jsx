import React, { useState } from 'react';
import OptionCard from './OptionCard';
import image1 from '../../assets/images/gallary/city_palace.jpg'
import image2 from '../../assets/images/gallary/jagmandir.jpg'
import image3 from '../../assets/images/gallary/lake_palace.jpg'
import image4 from '../../assets/images/gallary/polo_forest.jpg'
import image5 from '../../assets/images/gallary/shivmandir.jpg'

const options = [
    {
        icon: 'fas fa-walking',
        main: 'City Palace',
        sub: '',
        background: image1
    },
    {
        icon: 'fas fa-snowflake',
        main: 'Jagmandir',
        sub: '',
        background: image2
    },
    {
        icon: 'fas fa-tree',
        main: 'Lake Palace',
        sub: '',
        background: image3
    },
    {
        icon: 'fas fa-tint',
        main: 'Polo Forest',
        sub: '',
        background: image4
    },
    {
        icon: 'fas fa-sun',
        main: 'Shivmandir',
        sub: '',
        background: image5
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
