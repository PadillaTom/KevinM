import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-center'>
        <div className='nav-logo-container'>
          <p>
            <span> K</span>evin <span> M</span>aurin
          </p>
        </div>
        <div className='nav-hamburger'>
          <AiOutlineMenu></AiOutlineMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
