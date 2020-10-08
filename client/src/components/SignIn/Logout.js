import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Logout = ({ logoutFunc }) => {
    
    useEffect(() => {
        logoutFunc()
    });
    return (
        //<div>
        //    LOGOUT
        //</div>
        <Redirect to="/" />
    );
};

export default Logout;