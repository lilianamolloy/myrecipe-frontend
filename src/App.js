import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Recipes from './Recipes';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';
import Delete from './Delete';
import Error from './Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
             <Route path="/" component={Welcome} exact/>
             <Route path="/recipes" component={Recipes} exact/>
             <Route path="/recipes/new" component={NewRecipe} exact/>
             <Route path="/recipes/:id/delete" component={Delete} exact/>
             <Route path="/recipes/:id/:edit" component={Recipe} exact/>
             <Route path="/recipes/:id" component={Recipe} exact/>
             <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
