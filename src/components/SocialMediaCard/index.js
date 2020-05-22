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

    const followerString = numberOfFollowers >= 10000 ? `${numberOfFollowers.toString().slice(0, 2)}k` : numberOfFollowers;

    return (
        <div className={`followerCard ${mediaName}`}>
            <div className="colorFlash"></div>
            <div className="header">
                <img alt="" src={icon} />
                <span>{handle}</span>
            </div>
            <div className="followerContainer">
                <div className="followerNumber">{followerString}</div>
                <div className="followerName">{followerName}</div>
            </div>
            <div className="changeContainer">
                <img alt="" src={positiveChange ? "images/icon-up.svg" : "images/icon-down.svg"} />
                <span className={`${positiveChange ? "positive" : "negative"}`}>{changeNumber} Today</span>
            </div>
        </div>
    )
}

export default SocialMediaCard
