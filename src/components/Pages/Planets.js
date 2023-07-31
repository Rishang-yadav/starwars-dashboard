import React, { useState, useEffect } from 'react';

function Planets() {
  // State to store the planets data
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
  
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => setPlanets(data.results));
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      {planets.map(planet => (
        <div key={planet.name}>
          <h3>{planet.name}</h3>
          <p>Climate: {planet.climate}</p>
          <p>Gravity: {planet.gravity}</p>
        </div>
      ))}
    </div>
  );
}

export default Planets;
