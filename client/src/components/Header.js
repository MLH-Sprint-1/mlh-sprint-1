import React from 'react';
import { Link, useHistory} from 'react-router-dom';

const Header = ({auth, setAuth}) => {
  let history = useHistory()


    // if user is logged in, should display 'Logout'
    // else, should show 'Login' and 'Signup'
    const optionsSignIn = (
            <React.Fragment>
                <Link to="/signin" className="item">
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
        setAuth(false)
        history.push('/')
      }else{
        alert(resJson.status)
      }
    }

    const optionsSignOut = (
        <div className="ui simple dropdown item">
            <i className="user icon" />
            Welcome, Aneesh!
            <i className="dropdown icon" />
            <div className="menu">
                <div className="item">
                  <i className="cog icon" />
                  Settings
                </div>
                <div className="item" onClick={handleLogout}>
                  <i className="sign out alternate icon" />
                  Logout
                </div>
            </div>
        </div>
    );

    let optionsDisplayed = !auth? optionsSignIn: optionsSignOut

    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className="item">
                Home
            </Link>

            {auth &&
            <Link to='/choices' className="item">
                Choices
            </Link>}
            <div className="right menu">
                {optionsDisplayed}

            </div>
        </div>
    );
};

export default Header;
