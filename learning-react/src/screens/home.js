import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeScreen = () => {

  const navigate = useNavigate(); 

  const goToContactScreen = () => {
    navigate("/contact");
  }

  return(
    <div>
      <h1>This is a Home Screen</h1>
      <NavLink to="/">Back to Landing Screen</NavLink>
      <br/>
      <button onClick={ () => goToContactScreen() }>Click here to Contact Screen</button>
    </div>
  )
}

export default HomeScreen;


/*
import React from "react";

const ComponentName = () => {
  return(
    <></>
  )
}

export default ComponentName
*/