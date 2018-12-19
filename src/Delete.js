import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Delete extends Component{
    state = {
        recipe: null
    }

    componentDidMount(){
        const url = `http://localhost:5000/recipes/${this.props.match.params.id}`
        axios.delete(url)
        .then(resp => {
            console.log(resp.data)
            this.setState({recipe: resp.data})
        })
    }

    render(){
        const { recipe } = this.state
        if (recipe) {
            return (
                <div>
                    <h1>Your recipe for {recipe.title } has been deleted </h1>
                    <Link to="/recipes">All recipes</Link>
                </div>
        )
        } else {
            return <h1>Loading ...</h1>
        }
    }
}

export default Delete;