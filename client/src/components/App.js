import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Content/Home';
import Login from './SignIn/Login';
import Signup from './SignIn/Signup';
import Logout from './SignIn/Logout';

const App = () => {

    // state for if user is logged in (initially set to false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // log in (also applies to signing up)
    const logIn = () => {
        setIsLoggedIn(true);
    };

    // log out
    const logOut = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="ui container">
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn} />
                <Route path="/" exact 
                    render={() => <Home isLoggedIn={isLoggedIn} />}
                />
                <Route path="/login" exact 
                    render={() => <Login loginFunc={logIn} />} 
                />
                <Route path="/signup" exact 
                    render={() => <Signup loginFunc={logIn} />}
                />
                <Route path="/logout" exact 
                    render={() => <Logout logoutFunc={logOut} />}
                />
            </BrowserRouter>

        </div>
    );
};

export default App;