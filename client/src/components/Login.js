import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <form className="ui large form">
                <div className="ui stacked segment">
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="at icon" />
                            <input type="text" name="email" placeholder="E-mail address" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <Link to="/choices">
                        <button className="ui fluid large teal submit button">Login</button>
                    </Link>
                </div>

                {/*<div className="ui error message"></div>*/}
            </form>

            <div className="ui message">
                New Student or Professor? <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
