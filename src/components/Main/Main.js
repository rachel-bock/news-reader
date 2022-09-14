import './Main.css';
import Details from '../Details/Details';

const Main = ({story}) => {

  return (
    <div className='main'>
      {story && <Details newsStory={story}/>}
    </div>
  );
}

export default Main;