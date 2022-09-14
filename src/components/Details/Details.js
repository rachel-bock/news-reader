import './Details.css';

const Details = ({newsStory}) => {

  let photo;
  let caption;
  if (newsStory.multimedia) {
    photo = newsStory.multimedia[1].url;
    caption = newsStory.multimedia[1].caption;
  }

  return (
    <div className='news-details'>
      <img src={photo} alt={caption} />
      <h3>{newsStory.title}</h3>
      <p>{newsStory.byline}</p>
      <p>{newsStory.abstract}</p>
    </div>
  );
}

export default Details;