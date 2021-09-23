import React from "react";
import { Link } from "react-router-dom";

function PokemonLink({pokemonsummary}) {


    return  (
        <div>

            <Link to={`/pokemondata/${pokemonsummary.id}`}>{pokemonsummary.name}</Link>
       
        </div>
    )
    }
 

export default PokemonLink