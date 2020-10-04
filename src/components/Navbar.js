import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Navbar = () => {
  // Toggle Sidebar -->
  const [isOpen, setIsOpen] = useState(false);
  // Scroll to top:
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  // Main -->
  return (
    <nav className='navbar'>
      <div className='navbar-center'>
        {/* Desktop */}
        <div className='desktop-nav'>
          <div className='desktop-nav-container'>
            <div className='nav-logo-container'>
              <Link to='/' onClick={scrollToTop}>
                <p>
                  <span>N</span>yu<span>'</span>s <span>M</span>ixology
                  <span>.</span>
                </p>
              </Link>
            </div>
            <div className='desktop-nav-links-container'>
              <Link to='/about' onClick={scrollToTop}>
                Présentation
              </Link>
              {/* <Link to='/cocktails'>Cocktails</Link> */}
              <Link to='/soirees' onClick={scrollToTop}>
                Soirées
              </Link>
              <Link to='/contact' onClick={scrollToTop}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/* End Desktop */}

        {/* Mobile */}
        <div className='nav-hamburger'>
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)}></AiOutlineMenu>
        </div>
        {/* Sidebar */}
        <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
          <div className='sidebar-container'>
            <div className='sidebar-close'>
              <AiOutlineClose
                onClick={() => setIsOpen(!isOpen)}
              ></AiOutlineClose>
            </div>
            <div className='sidebar-links'>
              <Link
                to='/'
                onClick={() => {
                  setIsOpen(!isOpen);
                  scrollToTop();
                }}
              >
                Home
              </Link>
              <Link
                to='/about'
                onClick={() => {
                  setIsOpen(!isOpen);
                  scrollToTop();
                }}
              >
                Présentation
              </Link>
              {/* <Link to='/cocktails' onClick={() => setIsOpen(!isOpen)}>
                Cocktails
              </Link> */}
              <Link
                to='/soirees'
                onClick={() => {
                  setIsOpen(!isOpen);
                  scrollToTop();
                }}
              >
                Soirées
              </Link>
              <Link
                to='/contact'
                onClick={() => {
                  setIsOpen(!isOpen);
                  scrollToTop();
                }}
              >
                Contact
              </Link>
              <div className='sidebar-social-icons'>
                <AiOutlineFacebook></AiOutlineFacebook>
                <AiOutlineInstagram></AiOutlineInstagram>
              </div>
            </div>
          </div>
        </aside>
        {/* End Mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
