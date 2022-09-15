import React from 'react';
import './Listing.css';
import Article from '../Article/Article';

const Listing = ({limitedStories, selectStory}) => {

    const list = limitedStories.map((story, index) => {
    return(
      <button key={index} onClick={() => selectStory(index)}>
        <Article news={story} />
      </button>
    ) 
  });

  return (
    <div className='listing'>
      <h3>News Stories</h3>
      {list}
    </div>
  );
}

export default Listing;