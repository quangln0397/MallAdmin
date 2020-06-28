import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './Pages/login';
import dashboard from './Pages/dashboard';


import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/login"/>
        </Route>
        <Route exact path="/login" component={login} />
        <Route exact path="/dashboard" component ={dashboard} />
        <Route path="*" render={() => "404 not found!"} />

      </Switch>
  );
}

export default App;
