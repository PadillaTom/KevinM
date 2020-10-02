import React from 'react';
// import { Link } from 'react-router-dom';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
// Icono Copyright

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='section-center'>
        <div className='footer-info'>
          <div className='footer-icons-container'>
            <AiOutlineFacebook></AiOutlineFacebook>
            <AiOutlineInstagram></AiOutlineInstagram>
          </div>
          <p>
            Kevin Maurin <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
            2020
          </p>
          <p>Website by</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
