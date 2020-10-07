import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Choice from './Choice'

const App = () => {

    // state for if user is logged in (initially set to false)


    return (
        <div className="ui container">
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route exact path='/choices'>
              <Choice/>
            </Route>

          </Switch>
        </div>
    );
};

export default App;
