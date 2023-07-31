import React, { useState, useEffect } from 'react';

function Films() {
  const [view, setView] = useState('grid');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => setFilms(data.results));
  }, []);

  const toggleView = () => {
    setView(view === 'grid' ? 'list' : 'grid');
  };

  return (

    <div>
      <div className='Box'>
      <div className='insideBox'>
      <p id='flim'>Flims</p>
      <button onClick={toggleView} style={{display:'flex',flexDirection:'row'}}>
        {view === 'grid' ? 'Grid View' : 'List View'}
      </button>
      </div>
      </div>

      <div className='Area'>
      {view === 'grid' ? (
        <div className="grid-view">
          {films.map(film => (
            <div key={film.title} className="film-card">
              <img  src={`https://picsum.photos/200/300?random=${film.episode_id}`} alt={film.title} height= '160px'align-self= 'stretch' />
              <h3>{film.title}</h3>
              <p>{film.release_date}</p>
            </div>
            
          ))}
        </div>
      ) : (
        <ul className="list-view">
          {films.map(film => (
            <li key={film.title}>
              <h3>{film.title}</h3>
              <p>{film.release_date}</p>
            </li>
          ))}
        </ul>
      )}
      </div>
      
    </div>
  );
}

export default Films;
