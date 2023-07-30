
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Content from './components/Content';
// import { Route, Routes,useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';



function App() {
  
  return (
    <>
    <div className="App">
       <Header/>
       <div className='Body'>
        <SideMenu/>
        <Content/>
       
       </div>
    </div>
    </>
    
  );
}


export default App;
