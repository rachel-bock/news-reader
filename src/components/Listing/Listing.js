import React from 'react';
import './Listing.css';
import Article from '../Article/Article';

const Listing = ({headlines}) => {

  const list = headlines.map((story, index) => {
    return(
      <div>
        <Article news={story} key={index}/>
      </div>
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