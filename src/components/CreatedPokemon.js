import React from "react"

function CreatedPokemon({ xpokemon, onDeletePokemon }) {
    const { name, id } = xpokemon
    

    function handleDelete() {
        fetch(`/pokemondata/${id}`, {
            method: "DELETE"
        })
        onDeletePokemon(id)
    }
    
    return (
        <li>
            <strong>{name}</strong>

            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}
 
export default CreatedPokemon