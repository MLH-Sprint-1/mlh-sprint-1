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
                <Link to="/signin" className="item">
                    Login/Signup
                </Link>
            </React.Fragment>
    );

    const optionsSignOut = (
        <div className="ui simple dropdown item">
            <i className="user icon" />
            Welcome, Aneesh!
            <i className="dropdown icon" />
            <div className="menu">
                <div className="item">Settings</div>
                <Link to="/logout" className="item">
                    Logout
                </Link>
            </div>
        </div>
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