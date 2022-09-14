import React, { Component } from 'react';
import './App.css';
import Listing from '../Listing/Listing';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';
import { getTopStories } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headlines: [],

    }
  }
  

  componentDidMount() {
    getTopStories()
      .then(data => {
        console.log(data)
        this.setState({headlines: data.results});
      });
  }
 
  render() {
    return (
      <div className='App'>
        <h1>NYTreats - A New York Times News Reader</h1>
        <Navigation />
        <div className='body'>
          <Listing headlines={this.state.headlines}/>
          <Main />
        </div>
      </div>
    );
  }    
}

export default App;