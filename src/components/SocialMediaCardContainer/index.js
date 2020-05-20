import React, { Component } from 'react';
import SocialMediaCard from '../SocialMediaCard';
import { followerData } from '../../data';

import './style.css';

class SocialMediaCardContainer extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        }
    }

    setDataToState = async () => {
        const feedData = await followerData;
        this.setState({
            cards: feedData
        });
    }

    componentDidMount() {
        this.setDataToState();
    }

    render() {
        if (this.state.cards.length === 0) {
            return <div>Waiting for feed data</div>
        }

        return (
            <div className="cardsContainer">
                {this.state.cards.map(cardData => {
                    return <SocialMediaCard key={cardData.mediaName} data={cardData} />
                })}
            </div>
        )
    }
}

export default SocialMediaCardContainer;
