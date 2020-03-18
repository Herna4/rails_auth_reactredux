import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Dashboard from './Dashboard'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  } 

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
