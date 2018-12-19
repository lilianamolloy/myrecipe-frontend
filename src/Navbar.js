import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <Link to="/">home</Link>
            <Link to="/recipes">all recipes</Link>
            <Link to="/recipes/new">add new recipe</Link>
        </ul>
    )
}

export default Navbar