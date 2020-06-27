import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './Pages/login';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>
        <Route exact path="/login" component={login} />
        <Route path="*" render={() => "404 not found!"} />
      </Switch>
    </Router>
  );
}

export default App;
