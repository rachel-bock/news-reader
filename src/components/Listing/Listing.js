import React from 'react';
import './Listing.css';
import Article from '../Article/Article';
import Main from '../Main/Main';

const Listing = ({headlines}) => {

  const list = headlines.map((story, index) => {
    return(
      <button key={index} onClick={() => {
        return <Main story={story} />
      }}>
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