import React from 'react';
import './style.css';

function SocialMediaCard(props) {
    const { mediaName,
        icon,
        quantity,
        metric,
        changePercentage,
        positiveChange } = props.data;

    const qtyString = quantity >= 10000 ? `${quantity.toString().slice(0, 2)}k` : quantity;

    return (
        <div className={`overviewCard ${mediaName}`}>
            <div className="cardHeader">
                <div>{metric}</div>
                <img alt="" src={icon} />
            </div>
            <div className="metricContainer">
                <div className="metricNumber">{qtyString}</div>
                <div className="percentChangeContainer">
                    <img alt="" src={positiveChange ? "images/icon-up.svg" : "images/icon-down.svg"} />
                    <span className={`${positiveChange ? "positive" : "negative"}`}>{changePercentage}%</span>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaCard
