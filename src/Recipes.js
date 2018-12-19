import React, { Component } from 'react';
import PrintRecipes from './PrintRecipes';

class Recipes extends Component {
    state = {
        recipes: null
    }

    componentDidMount(){
        const url = "http://localhost:5000/recipes"
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                this.setState({recipes: json})
            })
    }

    render() {
        const { recipes } = this.state

        if(recipes) {
            return (
                <PrintRecipes recipes={recipes}/>
            )
        } else {
            return <h1>Loading ...</h1>
        }
    }
}

export default Recipes;