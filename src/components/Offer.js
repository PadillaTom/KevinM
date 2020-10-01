import React from 'react';
import { Link } from 'react-router-dom';

export default function Offer() {
  return (
    <section className='component-section'>
      <div className='section-center'>
        <div className='component-title'>
          <h3>
            Que proposons nous <span> ?</span>
          </h3>
        </div>
        <div className='offer-info-container'>
          <p>
            Vous aussi vous êtes épuisé de ces soirée interminable et monotone
            ou les boissons sont mal géré et trainent au milieu des table, sans
            services, glaçons et en plus boire des choses peu élégante ou
            élaborée ? (Whiskey coca dosé pour assommer un ours par exemple ?){' '}
          </p>
          <span> Si c’est le cas vous êtes au bon endroit !</span>
          <p>
            Nous proposons d’avoir un « espace bar à cocktail & débit de boisson
            » avec les{' '}
            <span>
              {' '}
              <Link to='/cocktails'>cocktails</Link>
            </span>{' '}
            avec ou sans alcool (appelés aussi « Mocktail ») de votre choix.
          </p>
        </div>
      </div>
    </section>
  );
}
