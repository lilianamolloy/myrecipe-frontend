import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

class Recipe extends Component {
    state = {
        recipe: null
    }

    componentDidMount(){
        const url = `http://localhost:5000/recipes/${this.props.match.params.id}`
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                this.setState({recipe: json})
            })
    }

    render() {
        const { recipe } = this.state

        if(recipe) {
            return (
                <RecipeCard recipe={recipe}/>
            )
        } else {
            return <h1>Loading ...</h1>
        }
    }
}

export default Recipe;