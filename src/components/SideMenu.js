import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes,useNavigate } from 'react-router-dom';

function SideMenu() {
    const navigate = useNavigate();
  
  return(
    
      <div className='style'>
       
       <div className="list">
        <Link to="/">
          
        </Link>
      </div>

       <div className='list' >
        <Link to="/Flims" >
          <div className='sideMenu'>
            <img className='folderImage' src='FolderSimple.svg' alt='logo'/>
            <div className='text'>Films</div>
            <button className='drop'>
              <img src='CaretRight.svg' alt='logo'/>
            </button>
          </div>
         
        </Link>
      
      </div>

      <div className='list' >
        <Link to="/People">
          <div className='sideMenu'>
            <img className='folderImage' src='FolderSimple.svg' alt='logo'/>
            <div className='text'>People</div>
            <button className='drop'>
              <img src='CaretRight.svg' alt='logo'/>
            </button>
            </div>
         
        </Link>
      
      </div>

      <div className='list' >
        <Link to="/Planets">
          <div className='sideMenu'>
            <img className='folderImage' src='FolderSimple.svg' alt='logo'/>
            <div className='text'>Planets</div>
            <button className='drop'>
              <img src='CaretRight.svg' alt='logo'/>
            </button>
            </div>
        </Link>
      </div>
      <div className='list' >
        <Link to="/Species">
          <div className='sideMenu'>
            <img className='folderImage' src='FolderSimple.svg' alt='logo'/>
            <div className='text'>Species</div>
            <button className='drop'>
              <img src='CaretRight.svg' alt='logo'/>
            </button>
            </div>
        </Link>
      </div>
      
      <div className='list' >
        <Link to="/Starships">
          <div className='sideMenu'>
            <img className='folderImage' src='FolderSimple.svg' alt='logo'/>
            <div className='text'>Starships</div>
            <button className='drop'>
              <img src='CaretRight.svg' alt='logo'/>
            </button>
            </div>
        </Link>
      </div>
      
      <div className='list' >
        <Link to="/Vehicles">
          <div className='sideMenu'>
            <img className='folderImage' src='FolderSimple.svg' alt='logo'/>
            <div className='text'>Vehicles</div>
            <button className='drop'>
              <img src='CaretRight.svg' alt='logo'/>
            </button>
            </div>
        </Link>
      </div>
        </div>
  
  );
}

export default SideMenu;