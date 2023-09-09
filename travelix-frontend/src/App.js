import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import DestinationScreen from "./screens/destinations";
import HotelScreen from "./screens/hotels";
import ContactScreen from "./screens/contact";
import PageNotFoundScreen from "./screens/page-not-found";
import AdminDestination from "./screens/admin-destination";
import AdminHotel from "./screens/admin-hotel";

import "./css/flaticon.css";
import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
        <Route path="hotels" element={<HotelScreen></HotelScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
        <Route path="admin/destination" element={<AdminDestination></AdminDestination>}></Route>
        <Route path="admin/hotel" element={<AdminHotel></AdminHotel>}></Route>

        <Route path="*" element={<PageNotFoundScreen></PageNotFoundScreen>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// Data Sharing

// 1. Parent Component -> Child Component = using props keyword 

// 2. Child Component -> Parent Component = using callback technique 

// 3. Inbetween Siblings or Un-Related = using Context API