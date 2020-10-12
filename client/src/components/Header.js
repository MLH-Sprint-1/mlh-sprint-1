import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    // if user is logged in, should display 'Logout'
    // else, should show 'Login' and 'Signup'


    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
                Home
            </Link>
            <div className="right menu">
                <Link to="/login" className="item">
                    Login
                </Link>
                <Link to="/signup" className="item">
                    Signup
                </Link>
            </div>
        </div>
    );
};

export default Header;
