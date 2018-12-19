import React from 'react';
import RecipeCard from './RecipeCard';

const PrintRecipes = (props) => {
    const recipes = props.recipes

    return (
        <div className="recipes">
        {
            recipes.map(recipe => {
                return (
                    <RecipeCard
                    key={recipe._id}
                    id={recipe._id}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    recipe={recipe.recipe}
                    image={recipe.image}
                    />
                )
            })
        }
        </div>
    )
}

export default PrintRecipes;