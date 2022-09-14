import React from 'react';
import './Article.css';

const Article = ({news}) => {

  return (
    <div className='story'>
      <h3>{news.title}</h3>      
    </div>
  );
}

export default Article;