import React from 'react';
import SocialMediaCardContainer from './components/SocialMediaCardContainer';
import OverviewContainer from './components/OverviewContainer'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <SocialMediaCardContainer />
        <OverviewContainer />
      </div>
    )
  }
}

export default App;
