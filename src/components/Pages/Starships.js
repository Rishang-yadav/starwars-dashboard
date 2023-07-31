import React, { useState, useEffect } from 'react';

function Starships() {
  // State to store the starships data
  const [starships, setStarships] = useState([]);
  // State to store the view mode (list or grid)
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    // Fetch starships data from the API
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => setStarships(data.results));
  }, []);

  return (
    <div>
      <h2>Starships</h2>
     
      <button onClick={() => setViewMode(mode => mode === 'list' ? 'grid' : 'list')}>
        Toggle View
      </button>
      {viewMode === 'list' ? (
        <ul>
          {starships.map(starship => (
            <li key={starship.name}>
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
              <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="grid-view">
          {starships.map(starship => (
            <div key={starship.name} className="grid-item">
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
              <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Starships;
