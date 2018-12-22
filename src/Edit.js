import React, { Component } from 'react';
import axios from 'axios';
import './css/Edit.css';

class Edit extends Component {
    state = {
        title: this.props.recipe.title,
        ingredient: '',
        ingredients: this.props.recipe.ingredients,
        recipe: this.props.recipe.recipe,
        image: this.props.recipe.image
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    changeArray = (e, i) => {
        const ingredients = this.state.ingredients
        ingredients[i] = e.target.value
        this.setState({ingredients})
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
    
        const url = `http://localhost:5000/recipes/${this.props.id}`
        const obj = {
          title,
          image,
          ingredients,
          recipe
        }
        axios.put(url, obj)
          .then(resp => {
            this.props.history.push(`/recipes/${resp.data._id}`);
            // console.log(this.props)
          });
      }

    render() {
        return(
            <div className="container2">
                <form>
                    <h1>{this.state.title}</h1>
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
                    <label className="ingredients">
                        Ingredients:
                        <div className="ingredient">
                            {
                                this.state.ingredients.map((ingredient, i) => {
                                    return (
                                    <input key={i} type='text' name="ingredient" value={ingredient} onChange={e => this.changeArray(e, i)}/>
                                    )
                                })
                            }
                        </div>
                        <br></br>
                        <div>
                        <input className="ingredient" type='text' name="ingredient" value={this.state.ingredient} onChange={ e => this.change(e)}/>
                        <button onClick={this.ingredientChange}>Add</button>
                        </div>
                    </label>
                    <br/>
                    <label>
                        Recipe:
                        <textarea className="desc" type='text-field' name="recipe" value={this.state.recipe} onChange={ e => this.change(e)}/>
                    </label>
                    <br/>
                    <button onClick={e => this.onSubmit(e)}>Update</button>
                </form>
            </div>
        )
    }
}

export default Edit;