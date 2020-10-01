import React from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header-center'>
          <div className='header-left'>
            <p className='header-name'>Kevin Maurin</p>
          </div>
          <div className='header-right'>
            <p>+00 00 000 00 00</p>
            <p>kevin@kevin.com</p>
          </div>
        </div>
      </header>
      <Navbar></Navbar>
    </React.Fragment>
  );
};

export default Header;
