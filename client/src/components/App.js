import React, { useState } from 'react';
import '../App.css'

import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Content/Home';
import Signin from './SignIn/Signin';
import Choice from './Choice'
import Question from './Question'
import QuestionList from './QuestionList'


const App = () => {

    // state for if user is logged in (initially set to false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // log out
    const logOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="ui container">
            <Header />
              <Switch>
                  <Route path="/" exact>
                    <Home isLoggedIn={isLoggedIn} />
                  </Route>

                <Route path="/signin" exact>
                  <Signin />
                </Route>
                <Route exact path ='/choices'>
                  <Choice />
                </Route>
                <Route exact path ='/question'>
                  <Question />
                </Route>
                <Route exact path='/question-list'>
                  <QuestionList />
                </Route>

            </Switch>


        </div>
    );
};

export default App;
