import React from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';

const Header = () => {

  let history = useHistory()
  let location = useLocation()

    // if user is logged in, should display 'Logout'
    // else, should show 'Login' and 'Signup'
    const optionsSignIn = (
            <React.Fragment>
                <Link to="/signin" className="item">
                <i className="sign in alternate icon" />
                    Login/Signup
                </Link>
            </React.Fragment>
    );

    async function handleLogout(e){
      const options = {
        method: 'DELETE',
      }
      const response = await fetch('/server/logout', options)
      const resJson = await response.json()
      if(resJson.status === 'success'){
        history.push('/')
      }else{
        alert(resJson.status)
      }
    }

    const optionsSignOut = (
        //<div className="ui simple dropdown item">
        //    <i className="user icon" />
        //    Welcome, Aneesh!
        //    <i className="dropdown icon" />
        //    <div className="menu">
        //        <div className="item">
        //          <i className="cog icon" />
        //          Settings
        //        </div>
        //        <div className="item" onClick={handleLogout}>
        //          <i className="sign out alternate icon" />
        //          Logout
        //        </div>
        //    </div>
        //</div>
          <React.Fragment>
            <div className="item">
              Welcome!
            </div>
            <div className="item" onClick={handleLogout} style={{'cursor': 'pointer'}}>
                <i className="sign out alternate icon" />
                Logout
            </div>
          </React.Fragment>
         
    );


    let optionsDisplayed
    if(location.pathname === '/' || location.pathname === '/signin'){
      optionsDisplayed = optionsSignIn
    }else{
      optionsDisplayed = optionsSignOut
    }

    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
              <i className="home icon" />
                Home
            </Link>
            <div className="right menu">
                {optionsDisplayed}

            </div>
        </div>
    );
};

export default Header;
