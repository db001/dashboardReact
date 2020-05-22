import React, { Component } from 'react';
import { overviewData } from '../../data';

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            totalUsers: null
        }
    }

    setDataToState = async () => {
        const feedData = await overviewData;
        this.setState({
            cards: feedData
        });
    }

    render() {
        return (
            <div>
                Social Media Dashboard
            </div>
        )
    }
}

export default Header;
