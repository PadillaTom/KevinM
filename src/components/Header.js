import React from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='header-center'>
          <div className='header-left'>
            <p className='header-name'>Nyu's M.</p>
          </div>
          <div className='header-right'>
            <p>+33 06 50 06 18 43</p>
            <p>maurinkevin.jobs@gmail.com</p>
          </div>
        </div>
      </header>
      <Navbar></Navbar>
    </React.Fragment>
  );
};

export default Header;
