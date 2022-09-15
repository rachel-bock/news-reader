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
      limitedStories: [],
      selectedArticle: {}, 
      search: ''
    }
  };
  
  handleSearch = (query) => {
    this.setState({search: query});
    this.setState({limitedStories: this.state.headlines.filter(story => story.section.includes(query))});
  };

  selectStory = (index) => {
    this.setState({selectedArticle: this.state.limitedStories[index]});
  };

  componentDidMount() {
    getTopStories()
      .then(data => {
        console.log(data)
        this.setState({headlines: data.results});
        this.setState({limitedStories: data.results});
      });
  };
 
  render() {
    return (
      <div className='App'>
        <h1>NYTreats - A New York Times Top Stories Reader</h1>
        <Navigation />
        <div className='body'>
          <Listing limitedStories={this.state.limitedStories} selectStory={this.selectStory} handleSearch={this.handleSearch} search={this.state.search}/>
          {this.state.selectedArticle && <Main story={this.state.selectedArticle} />}
        </div>
      </div>
    );
  };    
}

export default App;