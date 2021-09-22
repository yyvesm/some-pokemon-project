import React, {useState, useEffect} from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PokemonTeam from './components/PokemonTeam';
import PokemonSummary from "./components/PokemonSummary";
import PokemonList from './components/PokemonList';
import Navbar from './components/Navbar';

function App() {



  return (
    <div className="App">

<Router>

<Navbar />

  <Switch>

    <Route exact path="/">
      <PokemonList />
    </Route>

    <Route path="/pokemon/summary">
      <PokemonSummary />
    </Route>

    <Route path="/pokemon/team">
      <PokemonTeam />
    </Route>

    <Route path="*">
      <h1>404 Page Not Found</h1>
    </Route>

  </Switch>
</Router>

    </div>
  );
}

export default App;
