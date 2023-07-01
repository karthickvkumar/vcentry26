import React from "react";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {
  return(
    <div>
      <h1>This is a Login Screen</h1>
      <NavLink to="/">Back to Landing Screen</NavLink>
    </div>
  )
}

export default LoginScreen;