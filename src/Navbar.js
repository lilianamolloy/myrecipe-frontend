import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
    return (
        <ul className="nav">
            <Link className="li" to="/">home</Link>
            <Link className="li" to="/recipes">all recipes</Link>
            <Link className="li" to="/recipes/new">add new recipe</Link>
        </ul>
    )
}

export default Navbar