import React, { useState, useEffect } from 'react';
import '../App.css'

import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Welcome from './Content/Welcome';
import Signin from './SignIn/Signin';
import Choice from './Choice'
import Question from './Question'
import QuestionList from './QuestionList'
import QuestionDetails from './QuestionDetails'


const App = () => {


    // state for if user is logged in (initially set to false)
    const [auth, setAuth] = useState(false);

    async function checkState(){
      const response = await fetch('/server/check-auth')
      const resJson = await response.json()
      if(resJson.status === 'verified'){
        setAuth(true)
      }
    }

    useEffect(() => {
      checkState()
    })



    return (
        <div>
            <Header auth={auth} setAuth={setAuth} />
              <Switch>
                <Route path="/" exact
                    render={() => <Welcome />}
                />

                <Route path="/signin" exact>
                  <Signin setAuth={setAuth} />
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
                <Route exact path='/question-details/:id'>
                  <QuestionDetails />
                </Route>

            </Switch>


        </div>
    );
};

export default App;
