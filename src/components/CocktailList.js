import React from 'react';
import Cocktails from './Cocktails';

export default function CocktailList({ cocktails, title }) {
  return (
    <section className='section'>
      <h2 className='section-title'>{title}</h2>
      <div className='products-center'>
        {cocktails.map((item) => {
          return <Cocktails key={item.id} {...item}></Cocktails>;
        })}
      </div>
    </section>
  );
}
