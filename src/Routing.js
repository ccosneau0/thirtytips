import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, browserHistory} from 'react-router-dom';
import App from "./App";
import Registration from "./Pages/Registration/Registration";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Progression from "./Pages/Progression/Progression";
class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/dashboard'  component={Dashboard} />
          <Route exact path='/Progress'  component={Progression} />

        </Switch>
      </BrowserRouter>
    )
  }
}
export default Routing 