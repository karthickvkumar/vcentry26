import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";
import ContactScreen from "./screens/contact";
import LandingScreen from "./screens/landing";
import PageNotFoundScreen from "./screens/page-not-found";
import ProfileScreen from "./screens/profile";

import BasicProfileScreen from "./screens/basic-profile";
import AccountProfileScreen from "./screens/account-profile";
import SettingProfileScreen from "./screens/setting-profile";

import TodoListScreen from "./screens/todo-list";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingScreen></LandingScreen>}></Route>
        <Route path="home" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="profile" element={<ProfileScreen></ProfileScreen>}>
            <Route path="basic" element={<BasicProfileScreen></BasicProfileScreen>}></Route>
            <Route path="account" element={<AccountProfileScreen></AccountProfileScreen>}></Route>
            <Route path="setting" element={<SettingProfileScreen></SettingProfileScreen>}></Route>
        </Route>

        <Route path="todo" element={<TodoListScreen></TodoListScreen>}></Route>

        <Route path="*" element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;




// ES5
// function function_name(){

// }

// callback / Annoynonus Function 

// function (){

// }

// ES6 
// const function_name = () => {
  
// }

// callback / Annoynonus Function 

// () => {
  
// }

/*
Naming Convention 
1. Pascal Case - First Letter in a word should be UpperCase and Follow by Word first letter also be in UpperCase. There should not be no Space or Symbol in between words -- ex. KarthickKumarVelraj
It should be used in Class Name and Component Name 

2. Camel Case - First Letter in a word should be LowerCase and Follow by Word first letter should be in UpperCase. There should not be no Space or Symbol in between words -- ex. karthickKumarVelraj 
It should be used in Variable Name and Function Name 

3. Snake Case - All words will be in LowerCase, there should be underscore ( _ ) in between words -- ex. karthick_kumar_velraj
It should be used in Variable Name and Function Name 

4. Kebab Case - All words will be in LowerCase, there should be minus ( - ) in between words -- ex. karthick-kumar-velraj 
It should be used in CSS Name and HTML attribute
*/
