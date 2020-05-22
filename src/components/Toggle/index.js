import React from 'react';
import './style.css';

const Toggle = (props) => {
    return (
        <div className="toggleContainer">
            <span>Dark mode</span>
            <div className="toggleBody" onClick={props.toggleTheme}>
                <div className="toggleInner"></div>
            </div>
        </div>
    )
}

export default Toggle;
