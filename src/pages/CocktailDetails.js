import React from 'react';
import { useParams } from 'react-router-dom';

export default function CocktailDetails() {
  const { id } = useParams();
  return <div>Hello from cocktail Details : {id}</div>;
}
