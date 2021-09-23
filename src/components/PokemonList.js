import React from 'react'
import PokemonLink from './PokemonLink'

function PokemonList({pokemondata}) {
    
    const mappedPokemondata = pokemondata.map(pokemonsummary => <PokemonLink key={pokemonsummary.id} pokemonsummary={pokemonsummary}/>)

    return (
        <div id="">
         {mappedPokemondata}
        </div>
    )

}

export default PokemonList