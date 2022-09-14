import React from 'react';
import './Listing.css';
import Article from '../Article/Article';

const Listing = ({headlines}) => {

  const list = headlines.map((story, index) => {
    return <Article news={story} key={index}/>
  });

  return (
    <div className='listing'>
      <h2>NYTreats - A New York Times News Reader</h2>
      {list}
    </div>
  );
}

export default Listing;