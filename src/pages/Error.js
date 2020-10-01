import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <div className='error-container'>
        <h2>Page not Found.</h2>
        <Link to='/' className='btn btn-error'>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
