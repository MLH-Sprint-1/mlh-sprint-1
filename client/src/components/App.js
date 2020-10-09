import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Choice from './Choice'
import Question from './Question'
import QuestionList from './QuestionList'

const App = () => {

    // state for if user is logged in (initially set to false)


    return (
        <div className="ui container">
          <Header />

          <Switch>
            <Route exact path='/'>
              <Choice/>
            </Route>
            <Route exact path='/question'>
              <Question />
            </Route>
            <Route exact path='/question-list'>
              <QuestionList />
            </Route>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />


          </Switch>
        </div>
    );
};

export default App;
