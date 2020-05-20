import React from 'react';
import './style.css';

function SocialMediaCard(props) {
    const { mediaName,
        handle,
        icon,
        numberOfFollowers,
        followerName,
        changeNumber,
        positiveChange } = props.data;

    return (
        <div className={`followerCard ${mediaName}`}>
            <div className="colorFlash"></div>
            <div className="header">
                <img alt="" src={icon} />
                <span>{handle}</span>
            </div>
            <div className="followerContainer">
                <div className="followerNumber">{numberOfFollowers}</div>
                <div>{followerName}</div>
            </div>
            <div className="changeContainer">
                <img alt="" src={positiveChange ? "images/icon-up.svg" : "images/icon-down.svg"} />
                <span className={`${positiveChange ? "positive" : "negative"}`}>{changeNumber} Today</span>
            </div>
        </div>
    )
}

export default SocialMediaCard
