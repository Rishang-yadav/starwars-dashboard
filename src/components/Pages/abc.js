//import React from 'react';
import '../App.css';
import { Route, Routes,useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import People from './Pages/People';
import Planets from './Pages/Planets';
import Species from './Pages/Species';
import Starships from './Pages/Starships';
import Vehicles from './Pages/Vehicles';
import Films from './Pages/Flims';



 function Content(){
  
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

  return (<div className='contentStyle'>
    <Routes>
    <Route path='/' element={<div id='Box1'>
        <div className='mainPage'>
          <div id='mainPage1'>
            <div>
              <img src='card.png' alt='logo'width= '647px' height= '218px'/>
            </div>

            <span id='heading'>
              <p>Welcome to Star Wars Dashboard</p>
            </span>

            <div id='para'>
              <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</p>
            </div>
         
          </div>
          
        </div>
    </div>} ></Route>
      
      <Route path='/Flims'  element={<div className='Box'>
        
      <div >
      <div className='Box'>
      <div className='insideBox'>
      <p id='flim'>Flims</p>
      <button onClick={toggleView} style={{display:'flex',flexDirection:'row'}}>
        
        {view === 'grid' ? 'Grid View' : 'List View'}
      </button>
      </div>
      </div>
      

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
      </div>}></Route>
      <Route path='/People' element={<div className='Box'>
        <People/>
      </div>}></Route>
      <Route path='/Planets' element={<div className='Box'>
        <Planets/>
      </div>}></Route>
      <Route path='/Species' element={<div className='Box'>
        <Species/>
      </div>}></Route>
      <Route path='/Starships' element={<div className='Box'>
        <Starships/>
      </div>}></Route>
      <Route path='/Vehicles' element={<div className='Box'>
        <Vehicles/>
      </div>}></Route>
    </Routes>
  </div>
  )
}
export default Content;