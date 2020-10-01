import React, { useContext } from 'react';
import { CocktailContext } from '../context/cocktails';
import Loading from '../components/Loading';
import CocktailList from '../components/CocktailList';

const Cocktails = () => {
  //Rsponse from Context:
  const { loading, cocktails } = useContext(CocktailContext);
  // console.log(cocktails) // Vemos que funciona el Context.
  if (loading) {
    return <Loading></Loading>;
  } else {
    return (
      <CocktailList title='our cocktails' cocktails={cocktails}></CocktailList>
    );
  }
};

export default Cocktails;
