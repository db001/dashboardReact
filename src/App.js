import React from 'react';
import SocialMediaCardContainer from './components/SocialMediaCardContainer';
import OverviewContainer from './components/OverviewContainer';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styling/theme';
import { GlobalStyles } from './styling/global';
import './App.css';

export class App extends React.Component {
  constructor() {
    super();

    this.state = {
      theme: 'light'
    }
  }

  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark'
      })
    } else {
      this.setState({
        theme: 'light'
      })
    }

    console.log(this.state.theme)
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div>
          <Header toggleTheme={this.toggleTheme} />
          <SocialMediaCardContainer />
          <OverviewContainer />
        </div>
      </ThemeProvider>
    )

  }
}

export default App;
