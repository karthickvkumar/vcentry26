import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {

  const [ loginForm, updateLoginForm ] = useState({
    username : "",
    password : ""
  })

  const handleInput = (event) => {
    console.log(event.target.value, event.target.id);
    
    if(event.target.id == "username"){
      updateLoginForm({...loginForm, username :event.target.value });
    }
    else{
      updateLoginForm({...loginForm, password :event.target.value });
    }
  }

  const submitLogin = () => {
    console.log(loginForm);
  }

  return(
    <div>
      <h1>This is a Login Screen</h1>
      <div>
        <label>Enter your UserName</label>
        <input type="text" placeholder="Enter username" id="username" onChange={handleInput} />
      </div>
      <div>
        <label>Enter your Password</label>
        <input type="password" placeholder="Enter password" id="password" onChange={handleInput} />
      </div>
      <div>
        <button onClick={() => submitLogin()}>Login</button>
      </div>

      <NavLink to="/">Back to Landing Screen</NavLink>
    </div>
  )
}

export default LoginScreen;