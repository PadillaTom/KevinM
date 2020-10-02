// Cocktails Context from my own API
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import url from '../utils/URL';

//Context:
export const CocktailContext = React.createContext();

export default function CocktailProvider({ children }) {
  // States:
  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  // const [featured, setFeatured] = useState([]);

  // useEffect:
  useEffect(() => {
    setLoading(true);
    // URL:
    axios.get(`${url}/products`).then((response) => {
      setCocktails(response.data);
      setLoading(false);
    });
    return () => {
      //Cleanup
    };
  }, []);
  return (
    <CocktailContext.Provider value={{ loading, cocktails }}>
      {children}
    </CocktailContext.Provider>
  );
}
