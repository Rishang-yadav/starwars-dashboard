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
        <Films/>
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