import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import ContactScreen from "./screens/contact";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;




// ES5
// function function_name(){

// }

// ES6 
// const function_name = () => {
  
// }