import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  async function loginFunc(e){
    e.preventDefault()

    if(password.length === 0 || email.length === 0){
      alert('input details')
      return
    }
    console.log(email)
    const options = {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {"Content-Type": "application/json"}
    }
    const response = await fetch('/server/login',options)
    const resJson = await response.json()
    if(resJson.status === 'success'){
      //history.push('/choices')
      history.push('/mypage')
    }else{
      alert(resJson.status)
    }

  }

    return (
        <div>
            <form className="ui large form">
                <div className="ui stacked segment">
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="at icon" />
                            <input type="text" name="email" placeholder="E-mail address" value={email}
                             onChange={handleEmail}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input type="password" name="password" placeholder="Password" value={password}
                             onChange={handlePassword}/>
                        </div>
                    </div>
                    <button onClick={loginFunc} className="ui fluid large teal submit button">Login</button>

                </div>

                {/*<div className="ui error message"></div>*/}
            </form>

            {/*<div className="ui message">
                New Student or Professor? <Link to="/signup">Sign Up</Link>
            </div>*/}
        </div>
    );
};

export default Login;
