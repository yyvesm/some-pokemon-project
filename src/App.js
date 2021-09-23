import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreatePokemon from './components/CreatePokemon';
import PokemonSummary from "./components/PokemonSummary";
import PokemonList from './components/PokemonList';
import CreatedPokemonList from './components/CreatedPokemonList';
import Navbar from './components/Navbar';

function App() {

const [pokemondata, setPokemon] = useState([])

useEffect(() => {
   fetch('http://localhost:3000/pokemondata')
   .then(res => res.json())
   .then(data => setPokemon(data))
}, [])

function addPokemon(newPokemon) {
  const updatedPokemon = [...pokemondata, newPokemon]
  setPokemon(updatedPokemon);
}

function deletePokemon(id) {
  const updatedPokemon = pokemondata.filter(xpokemon => xpokemon.id !== id)
  setPokemon(updatedPokemon)
}



  return (
    <div className="App">

    <h1>Some Pokemon!</h1>
    <h2>Only some.</h2>
    
<Router>

   <Navbar />

         <Switch>

    <Route exact path="/">
      <PokemonList pokemondata={pokemondata} />
    </Route>

        <Route path="/pokemondata/create/list">
         <CreatePokemon onCreatePokemon={addPokemon} />
         <CreatedPokemonList pokemondata={pokemondata} onDeletePokemon={deletePokemon}/>
        </Route>

    <Route exact path="/pokemondata/:id">
      <PokemonSummary pokemondata={pokemondata} />
    </Route>


  </Switch>
</Router>

    </div>
  );
}

export default App;
