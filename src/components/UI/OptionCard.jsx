import React from 'react';

export default function OptionCard({ main, sub, background }) {
    return (
        <figure className="option">
            <img src={background} alt={main} />
            <figcaption className="label">
                <div className="info">
                    <div className="main">{main}</div>
                    {sub && <div className="sub">{sub}</div>}
                </div>
            </figcaption>
        </figure>
    );
}
