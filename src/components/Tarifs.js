import React from 'react';
import { Link } from 'react-router-dom';

export default function Tarifs() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className='component-section'>
      <div className='section-center'>
        <div className='component-title'>
          <h3>
            Nos Tarifs<span> ?</span>
          </h3>
        </div>
        <div className='offer-info-container'>
          <p>
            Notez bien qu’étant une entreprise d’évènementiel, nous faisons de
            la vente de <span>service</span> ainsi nous travaillons uniquement
            sur le stock du client et ne vendons pas de cocktails mais nous
            proposons une équipe pour les faire lors de votre évènement…
          </p>

          <span>Mais pas d’inquiétude !</span>
          <p>
            Cela fait partis de notre travail et du carnet des charges de
            proposer une fois le projet finalisé, une liste détaillé de ce que
            vous devez vous procurer en fonction du nombre de personnes et du
            menu choisi.
            <br />
            <br />
            Vous pouvez aussi nous contacter
            <span>
              <Link to='/contact' onClick={scrollToTop}>
                {' '}
                ici{' '}
              </Link>
            </span>
            afin de nous présenter votre projet et nous poser toutes les
            questions concernant ce que nous pouvons vous apporter.
          </p>
        </div>
      </div>
    </section>
  );
}
