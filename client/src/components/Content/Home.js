import React from 'react';
import User from './User';
import Welcome from './Welcome';

const Home = ({ isLoggedIn }) => {

    const componentToRender = isLoggedIn ? <User /> : <Welcome />;
    return (
        <div>
            {componentToRender}
        </div>
    );
};

export default Home;