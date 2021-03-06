import React from 'react';
import Cocktails from './Cocktails';

export default function CocktailList({ cocktails, title }) {
  return (
    <section className='section'>
      <h2 className='section-title cocktail-page-title'>{title}</h2>
      <div className='cocktails-cards-container'>
        {cocktails.map((item) => {
          return <Cocktails key={item.id} {...item}></Cocktails>;
        })}
      </div>
    </section>
  );
}
