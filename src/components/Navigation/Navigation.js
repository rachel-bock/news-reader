import React, { useState } from 'react';
import './Navigation.css';

class Navigation extends component {
  
  constructor() {
    super();
    this.state = {
      search: ''
    };
  };

  handleChange = event => {
    this.setState({search: event.target.value});
  };
 
  render() {
    return (
      <div className="navigation">
        <input 
          type='text' 
          placeholder='Search...' 
          name='search'
          value={this.state.search}
          onChange={event => handleSearch(event)}
        />
      </div>
    );
  }
}

export default Navigation;