import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  let history = useHistory()
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [student, setStudent] = useState(false)
  let [professor, setProfessor] = useState(false)
  let state = [student, professor]

async function signupFunc(e){
    e.preventDefault()
    if(email.length === 0 || password.length === 0 || firstName.length === 0 ||lastName.length === 0 || state.every((item) => !item)){
      alert('enter details')
      return
    }
    let accountType = student ? 'student' : 'professor';
    const options = {
      method: 'POST',
      body: JSON.stringify({firstName,lastName,email,password,accountType}),
      headers: {"Content-Type": "application/json"}
    }

    const response = await fetch('/server/signup',options)
    const resJson = await response.json()

    if(resJson.status === 'success'){
      history.push('/choices')
    }else{
      alert(resJson.status)
    }

  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function handlePassword(e){
    setPassword(e.target.value)
  }

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handleStudent(e){
    setStudent(e.target.value)
  }

  function handleProfessor(e){
    setProfessor(e.target.value)
  }

    // create radio buttons
    const userCategory = ['Student', 'Professor'];

    let stateHandlers = [handleStudent, handleProfessor]
    const userCategoryRadioButtons = userCategory.map((elem, index) => {
        return (
            <div key={elem} className="field">
                <div className="ui radio checkbox">
                    <input type="radio" name="category" value={state[index]}
                     onClick={stateHandlers[index]}/>
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
                    <div className="two fields">
                        <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon" />
                                    <input type="text" name="firstname" placeholder="First Name"
                                      value={firstName} onChange={handleFirstName}/>
                                </div>
                        </div>
                        <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon" />
                                    <input type="text" name="lastname" placeholder="Last Name"
                                     value={lastName} onChange={handleLastName}/>
                                </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="at icon" />
                            <input type="email" name="email" placeholder="E-mail address"
                             value={email} onChange={handleEmail}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui left icon input">
                            <i className="lock icon" />
                            <input type="password" name="password" placeholder="Password, minimum 6 characters"
                             value={password} onChange={handlePassword}/>
                        </div>
                    </div>
                    <button onClick={signupFunc} className="ui fluid large teal submit button">Sign Up</button>

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
