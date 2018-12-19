import React, { Component } from 'react';
import axios from 'axios';

class NewRecipe extends Component {
    state = {
        title: '',
        ingredient: '',
        ingredients: [],
        recipe: '',
        image: ''
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    ingredientChange = (e) => {
        e.preventDefault()
        const ingredients = this.state.ingredients
        let ingredient = this.state.ingredient
        ingredients.push(ingredient)
        ingredient = ''
        this.setState({ingredients, ingredient})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, image, ingredients, recipe } = this.state;
    
        const url = 'http://localhost:5000/recipes'
        const obj = {
          title,
          image,
          ingredients,
          recipe
        }
        axios.post(url, obj)
          .then(resp => {
            this.props.history.push(`/recipes/${resp.data._id}`);
          });
      }

    render() {
        return(
            <div className="container">
                <form>
                    <label>
                        Title:     
                        <input type='text' name="title" value={this.state.title} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <label>
                        Image URL:
                        <input type='text' name="image" value={this.state.image} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <label>
                        Ingredients:
                        <ul>
                            {
                                this.state.ingredients.map((ingredient, i) => {
                                    return (
                                    <li key={i}>{ingredient}</li>
                                )
                                })
                            }
                        </ul>
                        <input type='text' name="ingredient" value={this.state.ingredient} onChange={ e => this.change(e)}/>
                        <button onClick={this.ingredientChange}>Add</button>
                    </label>
                    <br/>
                    <label>
                        Recipe:
                        <input className="desc" type='text' name="recipe" value={this.state.recipe} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <button onClick={e => this.onSubmit(e)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewRecipe;