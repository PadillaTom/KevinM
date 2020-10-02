import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className='section about-section'>
      <div className='section-center'>
        <div className='about-section-container'>
          <h1 className='section-title'>
            Qui sommes-nous <span>?</span>
          </h1>
          <p className='about-text'>
            NBC est en entreprise spécialisée en évènement cocktails privée.
            Mené par
            <Link to='/Kevin' className='about-kevin'>
              Kevin
            </Link>
            , un bartender passionné et spécialisé, fort d’une belle et riche
            expérience dans le métier, NBC est une équipe jeune, dynamique avec
            de forte personnalités formé et spécialisé dans le milieu de la
            mixologie et les évènements privé.
          </p>
          <Link to='/cocktails' className='btn btn-about'>
            Cocktails
          </Link>
        </div>
      </div>
    </section>
  );
}
