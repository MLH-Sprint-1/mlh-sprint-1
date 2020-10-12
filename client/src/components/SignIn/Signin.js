import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const Signin = ({ loginFunc }) => {

    // signin options
    const signinArr = ['Login', 'Signup'];

    // state for currently selected option
    const [optionSelected, setOptionSelected] = useState(signinArr[0]);

    // loop through array and create divs
    const signinElems = signinArr.map(option => {
        return (
            <div 
                key={option} 
                className={`item ${option===optionSelected ? 'active' : ''}`}
                style={{'cursor': 'pointer'}}
                onClick={() => setOptionSelected(option)}
            >
                {option}
            </div>
        )
    })
    return (
        <div>
            <div className="ui top attached tabular menu">
                {signinElems}
            </div>
            <div className="ui bottom attached active tab segment">
                {optionSelected === 'Login' ? 
                    <Login loginFunc={loginFunc} /> : 
                    <Signup loginFunc={loginFunc} />
                }
            </div>
        </div>
    );
};

export default Signin;