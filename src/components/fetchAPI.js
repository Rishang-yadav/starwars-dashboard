import React, { useEffect, useState } from 'react';

const FetchAPI = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/films/');
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div>
      <h1>Films</h1>
      <ul>
        {films.map((film) => (
          <li key={film.title}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchAPI;