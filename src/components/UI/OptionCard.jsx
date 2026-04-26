import React from 'react';

export default function OptionCard({ main, sub, background, onClick }) {
    return (
        <figure className="option" onClick={onClick} style={{ cursor: 'pointer' }}>
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
