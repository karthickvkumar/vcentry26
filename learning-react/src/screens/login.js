import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {

  const [ loginForm, updateLoginForm ] = useState({
    UserName : "",
    password : ""
  })

  const [loginFormError, updateLoginFormError] = useState({
    UserName : false,
    password : false
  })

  const handleInput = (event) => {
    //console.log(event.target.value, event.target.id);
    updateLoginForm({...loginForm, [event.target.id] :event.target.value });
  }

  const submitLogin = () => {
    console.log(loginForm);

    // if(loginForm.UserName === ""){
    //   updateLoginFormError({...loginFormError, UserName : true});
    // }
    // if(loginForm.password === ""){
    //   updateLoginFormError({...loginFormError, password : true});
    // }

    updateLoginFormError({
      ...loginFormError,
      UserName : loginForm.UserName === "" ? true : false,
      password : loginForm.password === "" ? true : false 
    })


    //alert("Form has been submitted to Database");
  }

  return(
    <div>
      <h1>This is a Login Screen</h1>
      <div>
        <label>Enter your UserName</label>
        <input type="text" placeholder="Enter username" id="UserName" onChange={handleInput} />
        { loginFormError.UserName &&  <span className="error-msg">Please enter a valid username</span>}
        
      </div>
      <div>
        <label>Enter your Password</label>
        <input type="password" placeholder="Enter password" id="password" onChange={handleInput} />
        { loginFormError.password && <span className="error-msg">Please enter a valid passowrd</span>}
        
      </div>
      <div>
        <button onClick={() => submitLogin()}>Login</button>
      </div>

      <NavLink to="/">Back to Landing Screen</NavLink>
    </div>
  )
}

export default LoginScreen;