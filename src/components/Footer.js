import React from 'react';

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
            Nyu's Bartending Company{' '}
            <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
            2020
          </p>
          <p>+33 06 50 06 18 43 || maurinkevin.jobs@gmail.com </p>
          <p className='padilla-add'>
            Website by <a href='http://padillatomas.com'>Tomas Padilla.</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
