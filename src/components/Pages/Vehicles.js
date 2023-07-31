import React, { useState, useEffect } from 'react';

function Vehicles() {
  // State to store the vehicle data
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicle data from the API
    fetch('https://swapi.dev/api/vehicles/')
      .then(response => response.json())
      .then(data => setVehicles(data.results));
  }, []);

  return (
    <div>
      <h2>Vehicles</h2>
      {/* Render the vehicle data */}
      {vehicles.map(vehicle => (
        <div key={vehicle.name}>
          <h3>{vehicle.name}</h3>
          <p>Model: {vehicle.model}</p>
          <p>Top Speed: {vehicle.max_atmosphering_speed}</p>
        </div>
      ))}
    </div>
  );
}

export default Vehicles;
