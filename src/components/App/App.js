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
      articles: [],
      selectedArticle: {}
    }
  }

  handleSearch = (event) => {
    let news = this.state.headlines.filter(story => story.title.includes(event.target.value));
    this.setState({articles: [...news]});
  };
  
  selectStory = (index) => {
    this.setState({selectedArticle: this.state.headlines[index]});
  };

  componentDidMount() {
    getTopStories()
      .then(data => {
        console.log(data)
        this.setState({headlines: data.results});
        this.setState({articles: [...this.state.headlines]});
      });
  };
 
  render() {
    return (
      <div className='App'>
        <h1>NYTreats - A New York Times Top Stories Reader</h1>
        <Navigation handleSearch={this.handleSearch}/>
        <div className='body'>
          <Listing headlines={this.state.articles} selectStory={this.selectStory}/>
          {this.state.selectedArticle && <Main story={this.state.selectedArticle} />}
        </div>
      </div>
    );
  };    
}

export default App;