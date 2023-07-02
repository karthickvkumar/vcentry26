import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HomeScreen = () => {

  const message = "This is a Home Screen";

  var details = {
    userName : "Mr.John",
    address : "ECR Road, Chennai",
    contact : 9415252
  }

  let nameList = ["Tarun", "Sandy", "Muthu", "Suman", "Ganesan", "Nirmal"];

  const navigate = useNavigate(); 

  const goToContactScreen = () => {
    navigate("/contact");
  }

  return(
    <div>
      <h1>{message}</h1>
      
      <h2>The user name is <span className="text-highlight">{details.userName}</span> and his location {details.address}</h2>
      
      <h2>The students list - {nameList[0]} , {nameList[1]}, {nameList[2]}, {nameList[3]}, {nameList[4]} and {nameList[5]}</h2>
      
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

/*

Array In-Built Function

Empty Array 
let List = [];

To find whether array has value 
syntax: 
arrayVariableName.length  
0 - Empty array 
1 or greater than 1 - It has some value 

To Insert Value into Array 
syntax: 
arrayVariableName.push(value, value, value);
value - Any data type

syntax: 
arrayVariableName.unshift(value, value, value);
value - Any data type

To Remove value from Array
1. pop 
syntax:
arrayVariableName.pop();

2. shift 
syntax:
arrayVariableName.shift();

3. splice - To remove particular value from Array
syntax:
arrayVariableName.splice(index, numberOfCount);

*/