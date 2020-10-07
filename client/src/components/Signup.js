import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <form className="ui large form">
                <div className="ui stacked segment">
                    <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon" />
                                <input type="text" name="name" placeholder="Name" />
                            </div>
                    </div>
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
                    <Link to="/">
                        <button className="ui fluid large teal submit button">Signup</button>
                    </Link>
                </div>

                {/*<div className="ui error message"></div>*/}
            </form>

            <div className="ui message">
                Already Have an Account? <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Signup;
