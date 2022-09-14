import React from 'react';
import './Listing.css';
import Article from '../Article/Article';
import Main from '../Main/Main';

const Listing = ({headlines, selectStory}) => {

  const list = headlines.map((story, index) => {
    return(
      <button key={index} onClick={() => selectStory(index)}>
        <Article news={story} />
      </button>
    ) 
  });

  return (
    <div className='listing'>
      <h2>Top Stories</h2>
      {list}
    </div>
  );
}

export default Listing;