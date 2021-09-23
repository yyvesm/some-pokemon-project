import React from "react";
import CreatedPokemon from "./CreatedPokemon"

function CreatedPokemonList({ pokemondata, onDeletePokemon }) {
    
  return (
    <div>
      <h2>My Created Pokemon</h2>
      <ul> 
        {pokemondata.map((xpokemon) => (
          <CreatedPokemon key={xpokemon.id} xpokemon={xpokemon} onDeletePokemon={onDeletePokemon} />
        ))}
      </ul>
    </div>
  );
}
 
export default CreatedPokemonList;