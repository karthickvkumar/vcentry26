import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const LandingScreen = () => {

  // const [ stateVariable, stateFunction ] = useState(initalValue);
  // stateVariable = variable name
  // stateFunction = Function name

  const [ message, updateMessage ] = useState("");
  
  const onChangeTextArea = (event) => {
    updateMessage(event.target.value);
  }
  
  return(
    <div>
      <h1>Welcome to React JS Project - {message}</h1>
      <textarea onChange={onChangeTextArea}></textarea>
      <br />
      <NavLink to="/home">Go to Home Screen</NavLink>
      <br/>
      <NavLink to="/login">Click here for Login Screen</NavLink>
      <br/>
      <NavLink to="/profile">Click here for Profile Screen</NavLink>
      <br/>
      <NavLink to="/todo">Go to ToDO Screen</NavLink>
      <br/>
      <NavLink to="/signin">Go to Register Screen</NavLink>
    </div>
  )
}

export default LandingScreen;