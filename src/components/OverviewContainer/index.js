import React, { Component } from 'react';
import OverviewCard from '../OverviewCard';
import { overviewData } from '../../data';
import './style.css';

export class OverviewContainer extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        }
    }

    setDataToState = async () => {
        const feedData = await overviewData;
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
            <div className="overviewContainer">
                {this.state.cards.map((cardData, index) => {
                    return <OverviewCard key={'Overview' + cardData.mediaName + index} data={cardData} />
                })}
            </div>
        )
    }
}

export default OverviewContainer;
