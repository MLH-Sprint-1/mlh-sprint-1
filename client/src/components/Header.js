import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {

    // if user is logged in, should display 'Logout'
    // else, should show 'Login' and 'Signup'
    const optionsSignIn = ( 
            <React.Fragment>
                <Link to="/login" className="item">
                    Login
                </Link>
                <Link to="/signup" className="item">
                    Signup
                </Link>
            </React.Fragment>
    );
    const optionsSignOut = (
        <React.Fragment>
            <span className="item">Welcome!</span>
            <Link to="/logout" className="item">
                Logout
            </Link>
        </React.Fragment>
    );

    const optionsDisplayed = isLoggedIn ? optionsSignOut : optionsSignIn;

    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
                Home
            </Link>
            <div className="right menu">
                {optionsDisplayed}
            </div>
        </div>
    );
};

export default Header;