import React, {useState} from 'react';
import axios from 'axios';

const LoginProfile = () => {

  const [ loginFrom, updateLoginForm] = useState({
    email : "",
    password : ""
  });
  const [isLoading, updateIsLoading] = useState(false);

  const submitLogin = () => {
    // console.log(loginFrom);
    const url = "https://reqres.in/api/login";
    updateIsLoading(true);

    axios.post(url, loginFrom)
      .then((response) => {
        console.log(response.data);
        updateIsLoading(false);
        alert("Login Successfull");
      })
      .catch((error) => {
        console.log(error);
        updateIsLoading(false);
        alert("Login Failed");
      })
  }

  const handleInput = (event) => {
    // console.log(event.target.value, event.target.id);
    updateLoginForm({...loginFrom, [event.target.id] : event.target.value });
  }

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Enter your Email ID :</label>
        <input type="text" placeholder='Enter Email ID' onChange={handleInput} id='email' />
      </div>
      <div>
        <label>Enter your Password :</label>
        <input type="password" placeholder='Enter Password' onChange={handleInput} id='password'/>
      </div>
      <div>
        {isLoading 
          ? 
          <button disabled>
            <img src={require("../images/loader.gif")} alt='loader' width="15" />
            LOADING...</button>
          :
          <button onClick={() => submitLogin()}>LOGIN</button>
        }
        
      </div>
      
    </div>
  );
};

export default LoginProfile;