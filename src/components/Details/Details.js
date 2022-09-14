import './Details.css';

const Details = ({newsStory}) => {

  console.log(newsStory.multimedia);


  return (
    <div className='news-details'>
      <h3>{newsStory.title}</h3>
    </div>
  );
}

export default Details;