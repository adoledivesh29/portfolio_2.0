import React from 'react';

export default function OptionCard({ icon, main, sub, background, isActive, onClick }) {
    return (
        <div
            className={`option ${isActive ? 'active' : ''}`}
            style={{ '--optionBackground': `url(${background})` }}
            onClick={onClick}
        >
            <div className="shadow"></div>
            <div className="label">
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className="info">
                    <div className="main">{main}</div>
                    <div className="sub">{sub}</div>
                </div>
            </div>
        </div>
    );
}
