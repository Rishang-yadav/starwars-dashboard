import React, { useState, useEffect } from 'react';

function Species() {
  // State to store the species data
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    // Fetch species data from the API
    fetch('https://swapi.dev/api/species/')
      .then(response => response.json())
      .then(data => setSpecies(data.results));
  }, []);

  return (
    <div>
      <h2>Species</h2>
      {species.map(specie => (
        <div key={specie.name}>
          <h3>{specie.name}</h3>
          <p>Classification: {specie.classification}</p>
          <p>Designation: {specie.designation}</p>
          <p>Average Height: {specie.average_height}</p>
        </div>
      ))}
    </div>
  );
}

export default Species;
