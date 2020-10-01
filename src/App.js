import React from 'react';
import './App.css';
// Router Dom:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Pages:
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import CocktailDetails from './pages/CocktailDetails';
import Cocktails from './pages/Cocktails';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Kevin from './pages/Kevin';
// Components:
import Header from './components/Header';

// Main:
function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/kevin'>
          <Kevin></Kevin>
        </Route>
        <Route exact path='/cocktails'>
          <Cocktails></Cocktails>
        </Route>
        <Route
          path='/cocktails/:id'
          children={<CocktailDetails></CocktailDetails>}
        ></Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
