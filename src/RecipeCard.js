import React from 'react';
import { Link } from 'react-router-dom';
import './css/Recipe.css';

const RecipeCard = (props) => {
    if (props.recipe._id){
        const recipe = props.recipe
        return (
            <div className="page">
                <h1>{recipe.title}</h1>
                <img  src={recipe.image} alt=" food"></img>
                {
                    recipe.ingredients.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
                <p>{recipe.recipe}</p>
                <Link to="/recipes">Back</Link>
            </div>
        )
    }

    const link = `/recipes/${props.id}`
    return (
        <div className="card">
            <Link className="h1" to={link}>{props.title}</Link>
            <img  src={props.image} alt="yummy food"></img>
            <div className="links">
                <Link className="link" to={`/recipes/${props.id}/delete`}>Delete</Link>
                <Link className="link" to={`/recipes/${props.id}/edit`}>Edit</Link>
            </div>
        </div>
    )
}

export default RecipeCard