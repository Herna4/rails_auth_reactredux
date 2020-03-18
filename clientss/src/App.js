import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../components/Home';
import Dashboard from '..components/Dashboard'

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/dashboard"} component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
