import React from 'react';
import './Listing.css';
import Article from '../Article/Article';

const Listing = ({headlines, selectStory, handleSearch, search}) => {

  const limitedStories = headlines.filter(story => story.section.includes(search));

  const list = limitedStories.map((story, index) => {
    return(
      <button key={index} onClick={() => selectStory(index)}>
        <Article news={story} />
      </button>
    ) 
  });

  return (
    <div className='listing'>
      <h3>Sections</h3>
      <button onClick={(event)=> handleSearch('')}>All
      </button>
      <button onClick={(event)=> handleSearch('world')}>World Events
      </button>
      <button onClick={(event)=> handleSearch('business')}>Business
      </button>
      <button onClick={(event)=> handleSearch('climate')}>Climate
      </button>
      <button onClick={(event)=> handleSearch('opinion')}>Opinion
      </button>
      <h3>News Stories</h3>
      {list}
    </div>
  );
}

export default Listing;