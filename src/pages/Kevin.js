import React from 'react';
import { Link } from 'react-router-dom';

export default function Kevin() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className='section'>
      <div className='kevin-section-container'>
        <div className='section-title'>
          <h1>Le créateur</h1>
        </div>
        <div className='section-center'>
          <div className='kevin-info-container'>
            <p className='kevin-text'>
              Il exerce actuellement à Genève en Suisse. Son aventure a commencé
              au Chat Noir de Genève, un bar extrêmement réputé dans le milieu
              du cocktail ou il avait été formé en tant que commis. Il a par la
              suite, afin de parfaire son expérience, côtoyé tout type de bar
              avant de retourner pour de bon dans le monde de la mixologie et
              travaille actuellement comme responsable de bar et mixologiste au
              Purple Bar du restaurant Kampaï.
            </p>
            <p className='kevin-text'>
              Toujours à la recherche de défis et dans le but le pouvoir
              partager sa passion et de faire gouter au plus grand nombre les
              produits issus de son talent, il a entrepris l’idée de former une
              équipe de lancer des évènements privé dans le but d’apporter une
              touche cocktail chez vous, à vos soirées ou évènements.
            </p>
            <Link to='/contact' className='btn btn-kevin' onClick={scrollToTop}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
