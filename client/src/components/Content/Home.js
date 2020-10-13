import React from 'react';
import MyPage from './MyPage';
import Welcome from './Welcome';

const Home = ({ isLoggedIn }) => {

    const componentToRender = isLoggedIn ? <MyPage /> : <Welcome />;
    return (
        <div>
            {componentToRender}
        </div>
    );
};

export default Home;