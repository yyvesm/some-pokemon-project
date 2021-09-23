import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
        <Link to="/"> Pokemon list </Link>
        <br />
        <Link to="/pokemondata/create/list"> Create Pokemon </Link>
        </nav>
    )
}

export default Navbar