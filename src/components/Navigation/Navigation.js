import './Navigation.css';

const Navigation = ({handleSearch}) => {
  return (
    <div className="navigation">
      <h3>Sections</h3>
      <button onClick={(event)=> handleSearch('')}>All</button>
      <button onClick={(event)=> handleSearch('arts')}>Arts</button>
      <button onClick={(event)=> handleSearch('books')}>Books</button>
      <button onClick={(event)=> handleSearch('briefing')}>Briefing</button>
      <button onClick={(event)=> handleSearch('business')}>Business</button>
      <button onClick={(event)=> handleSearch('climate')}>Climate</button>
      <button onClick={(event)=> handleSearch('health')}>Health</button>
      <button onClick={(event)=> handleSearch('magazine')}>Magazine</button>
      <button onClick={(event)=> handleSearch('nyregion')}>NY Region</button>
      <button onClick={(event)=> handleSearch('opinion')}>Opinion</button>
      <button onClick={(event)=> handleSearch('podcasts')}>Podcasts</button>
      <button onClick={(event)=> handleSearch('realestate')}>Real Estate</button>
      <button onClick={(event)=> handleSearch('sports')}>Sports</button>
      <button onClick={(event)=> handleSearch('us')}>U.S.</button>
      <button onClick={(event)=> handleSearch('well')}>Wellness</button>
      <button onClick={(event)=> handleSearch('world')}>World Events</button>
    </div>
  );
}

export default Navigation;