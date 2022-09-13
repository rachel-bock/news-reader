import './App.css';
import Listing from '../Listing/Listing';
import Main from '../Main/Main';
import Navigation from '../Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <h1>NYTreats - A New York Times News Reader</h1>
      <Navigation />
      <div className='body'>
        <Listing />
        <Main />
      </div>
    </div>
  );
}

export default App;
