import React from 'react';
import Hero from '../components/Hero';
import Offer from '../components/Offer';

export default function home() {
  return (
    <React.Fragment>
      <Hero></Hero>
      <div className='section-division'></div>
      <Offer></Offer>
    </React.Fragment>
  );
}
