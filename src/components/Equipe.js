import React from 'react';
import { Link } from 'react-router-dom';
export default function Equipe() {
  return (
    <section className='component-section-white'>
      <div className='section-center'>
        <div className='component-title-white'>
          <h3>
            L<span>'</span>Equipe
          </h3>
        </div>
        <div className='offer-info-container-white'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore
            consequatur repellat et quasi ullam modi delectus animi dicta
            repudiandae!
          </p>
          <Link to='/soirees' className='btn btn-about-white'>
            Soirées Thématiques
          </Link>
        </div>
      </div>
    </section>
  );
}
