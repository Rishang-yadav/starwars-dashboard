import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          padding: '20px',
          justifyContent: 'space-between',
          alignitems: 'center',
        }}
      >
        <button onClick={handleBackClick} style={{backgroundColor:'#03123D',border:'none'}}>
        <img src="Image 6.png" alt="Logo"style={{width: '72px',height: '36px',}}/>
        </button>
       
        <div
          style={{
            display: 'flex',
            width: '216px',
            height: '32px',
            padding: '4px 8px',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{ border: 'none', outline: 'none', marginRight: '0.5rem' ,opacity:'0'}}
          />
          {/* <button
            style={{
              borderRadius: '4px',
              border: '1px solid var(--white-1, #FFF)',
              background: 'rgba(255, 255, 255, 0.00)',
              
            }}
          ></button> */}
        </div>
      </div>
    </>
  );
};

export default Header;