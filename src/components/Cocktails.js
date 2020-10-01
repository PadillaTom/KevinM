import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Main:
export default function Cocktails({ image, title, id, price }) {
  const url = image.url;
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={url} alt={title} />
        <Link to={`cocktails/${id}`} className='btn btn-product-link'>
          Details
        </Link>
      </div>
      <div className='product-footer'>
        <p className='product-title'>{title}</p>
      </div>
    </article>
  );
}
