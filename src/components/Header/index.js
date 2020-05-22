import React, { Component } from 'react';
import { followerData } from '../../data';
import Toggle from '../Toggle';
import './style.css';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalUsers: null
        }
    }

    setDataToState = async () => {
        const feedData = await followerData;

        const totalUsers = feedData.reduce((acc, curr) => acc + curr.numberOfFollowers, 0);

        this.setState({
            totalUsers: totalUsers
        });
    }
    componentDidMount() {
        this.setDataToState();
    }

    render() {
        return (
            <div className="header">
                <div className="headlineWrapper">
                    <div className="headlineContainer">
                        <h1>Social Media Dashboard</h1>
                        <p>Total Followers: {this.state.totalUsers}</p>
                    </div>
                    <Toggle toggleTheme={this.props.toggleTheme} />
                </div>
            </div>
        )
    }
}

export default Header;
