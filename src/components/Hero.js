import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ children }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>
          Nyu<span>'</span>s Bartending Company <span>,</span>
        </h1>
        <h4>Évènements cocktails privées. </h4>
        {/* <Link to='/cocktails' className='btn btn-hero'>
          Cocktails
        </Link> */}
        <Link to='/soirees' className='btn btn-hero' onClick={scrollToTop}>
          Soirées
        </Link>
      </div>
    </div>
  );
}
