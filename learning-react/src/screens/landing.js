import React from "react";
import { NavLink } from "react-router-dom";

const LandingScreen = () => {
  return(
    <div>
      <h1>Welcome to React JS Project</h1>
      <NavLink to="/home">Go to Home Screen</NavLink>
      <br/>
      <NavLink to="/login">Click here for Login Screen</NavLink>
      <br/>
      <NavLink to="/profile">Click here for Profile Screen</NavLink>
    </div>
  )
}

export default LandingScreen;