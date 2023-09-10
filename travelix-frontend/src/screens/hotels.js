import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeaderComponent from "../components/header";
import FooterComponent from '../components/footer';
import HotelListComponent from '../components/hotel-list';
import HotelSearchComponent from "../components/hotel-search";

const HotelScreen = () => {

  // const baseURL = "http://localhost:4000/api";
  const baseURL = "https://travelix-api.onrender.com/api";
  const [hotelList, updateHotelList] = useState([]);

  useEffect(() => {
    getAllHotels();
  }, []);

  const searchHotelAPI = (filterSearch) => {
    // future axios call
    console.log(filterSearch);
    const url = baseURL + "/list/hotels?hotelName=" + filterSearch.destination;

    axios.get(url)
        .then((response) => {
          updateHotelList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
  }

  const getAllHotels = () => {
    const url = baseURL + "/list/hotels";

    axios.get(url)
        .then((response) => {
          updateHotelList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
}

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_1.jpg")})` }}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                className="fa fa-chevron-right"></i></a></span> <span>Hotel <i className="fa fa-chevron-right"></i></span></p>
              <h1 className="mb-0 bread">Hotel</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <HotelSearchComponent callback={searchHotelAPI}></HotelSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">

          {
            hotelList.map((value, index) => {
              return(
                <HotelListComponent hotel={value} key={index}></HotelListComponent>
              )
            })
          }
            
          </div>
          {/* <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li className="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <FooterComponent></FooterComponent>

    </div>
  );
};

export default HotelScreen;