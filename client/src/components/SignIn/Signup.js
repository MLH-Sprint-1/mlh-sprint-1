import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ loginFunc }) => {

    // create radio buttons 
    const userCategory = ['Student', 'Professor'];
    const userCategoryRadioButtons = userCategory.map((elem, index) => {
        return (
            <div key={elem} className="field">
                <div className="ui radio checkbox">
                    <input type="radio" name="category" defaultChecked={index===0} />
                    <label>{elem}</label>
                </div>
            </div>
        )
    });

    return (
        <div>
            <form className="ui large form">
                <div className="ui stacked segment">
                    <div className="inline fields">
                        <label>Signing up as a:</label>
                        {userCategoryRadioButtons}
                    </div>
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
                        <button onClick={loginFunc} className="ui fluid large teal submit button">Sign Up</button>
                    </Link>
                </div>

                {/*<div className="ui error message"></div>*/}
            </form>

            {/*<div className="ui message">
                Already Have an Account? <Link to="/login">Login</Link>
            </div>*/}
        </div>
    );
};

export default Signup;
