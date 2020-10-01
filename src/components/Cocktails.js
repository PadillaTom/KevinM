import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Main:
export default function Cocktails({ image, title, id, price }) {
  const url = image.url;
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={url} alt={title} />
      </div>
      <div className='cocktail-footer'>
        <p className='cocktail-title'>{title}</p>
        <Link to={`cocktails/${id}`} className='btn-cocktail-link'>
          Details
        </Link>
      </div>
    </article>
  );
}
