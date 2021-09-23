import React from 'react'
import { useParams } from 'react-router-dom'


function PokemonSummary({pokemondata}) {

    const params = useParams()

    const selectedPokemon = pokemondata.find(pokemonsummary => pokemonsummary.id === parseInt(params.id))

    if (selectedPokemon) {

    return (

        <div>
        <h1>{selectedPokemon.name}</h1>
        <img src={selectedPokemon.image} alt={selectedPokemon.name}/>
          <p>{selectedPokemon.type}</p>



        </div>
    )
       } else {
          
      return (
        null
      )
    } 
}
export default PokemonSummary