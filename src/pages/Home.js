import React from 'react';
import Equipe from '../components/Equipe';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Tarifs from '../components/Tarifs';

export default function home() {
  return (
    <React.Fragment>
      <Hero></Hero>
      <div className='section-division'></div>
      <Offer></Offer>
      <div className='section-division'></div>
      <Equipe></Equipe>
      <div className='section-division'></div>
      <Tarifs></Tarifs>
    </React.Fragment>
  );
}
