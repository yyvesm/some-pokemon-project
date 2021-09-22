import React from "react";
import { Link } from "react-router-dom"

function Navbar(props) {
    return (
        <nav>
        <Link to="/"> Pokemon list </Link>
        <br />
        <Link to="/pokemon/team"> Pokemon Team </Link>
        </nav>
    )
}

export default Navbar