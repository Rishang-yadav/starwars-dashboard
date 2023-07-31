import React, { useState, useEffect } from 'react';

function People() {
  // State to store the people data
  const [people, setPeople] = useState([]);

  useEffect(() => {
    // Fetch people data from the API
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => setPeople(data.results));
  }, []);

  return (
    <div>
      <h2>People</h2>
      {people.map(person => (
        <div key={person.name}>
          <h3>{person.name}</h3>
          <p>Gender: {person.gender}</p>
          <p>Birth Year: {person.birth_year}</p>
          <p>Height: {person.height}</p>
        </div>
      ))}
    </div>
  );
}

export default People;
