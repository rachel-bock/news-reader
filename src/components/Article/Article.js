import React from 'react';
import './Article.css';

const Article = ({news}) => {

  return (
    <div className='story'>
      <h3>{news.title}</h3>  
      <h4>{news.byline}</h4>
      <h6>in {news.section}</h6>    
    </div>
  );
}

export default Article;