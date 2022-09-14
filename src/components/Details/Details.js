import './Details.css';

const Details = ({newsStory}) => {

  return (
    <div className='news-details'>
      <h3>{newsStory.title}</h3>
      
    </div>
  );
}

export default Details;