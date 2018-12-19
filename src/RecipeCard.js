import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    if (props.recipe._id){
        const recipe = props.recipe
        return (
            <div>
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
        <div>
            <Link to={link}>{props.title}</Link>
            <img  src={props.image} alt="yummy food"></img>
            <Link to={`/recipes/${props.id}/delete`}>Delete</Link>
        </div>
    )
}

export default RecipeCard