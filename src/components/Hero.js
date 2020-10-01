import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero({ children }) {
  return (
    <div className='hero'>
      <div className='banner'>
        <h1>
          Kevin Maurin <span>,</span>
        </h1>
        <h4>bartender passionné et diplômé à l’European Bartender School.</h4>
        <Link to='/cocktails' className='btn btn-hero'>
          Cocktails
        </Link>
      </div>
    </div>
  );
}
