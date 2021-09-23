import React, { useState } from "react"

function CreatedPokemon({ onCreatePokemon }) {
    const [name, setName] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault()
        const pokeObj = { 
            xpokemon: { 
                name: name 
            }
        }

        fetch("http://localhost:3000/pokemondata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pokeObj)
        })
            .then(r => r.json())
            .then(data => onCreatePokemon(data.xpokemon))
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Pokemon</h2>
            <label htmlFor="name">Enter Your "Pokemon" Name Here:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Submit</button>
            
        </form>
    )
}
 
export default CreatedPokemon;