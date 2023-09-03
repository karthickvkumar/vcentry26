import React from 'react';

import HeaderComponent from "../components/header";
import FooterComponent from '../components/footer';
import HotelListComponent from '../components/hotel-list';

const HotelScreen = () => {

  const hotelList = [
    {
      hotel_price : "200",
      hotel_image : require("../images/hotel-resto-1.jpg"),
      hotel_name : "Manila Hotel",
      hotel_location: "Manila, Philippines",
      room_count : 2,
      room_bed_count : 1,
      room_facing : "Mountain Facing"
    },
    {
      hotel_price : "400",
      hotel_image : require("../images/hotel-resto-8.jpg"),
      hotel_name : "Taj Hotel",
      hotel_location: "Mumbai, India",
      room_count : 2,
      room_bed_count : 1,
      room_facing : "Sea Facing"
    },
    {
      hotel_price : "150",
      hotel_image : require("../images/hotel-resto-2.jpg"),
      hotel_name : "Accord Hotel",
      hotel_location: "Newyork, US",
      room_count : 2,
      room_bed_count : 1,
      room_facing : "Mountain Facing"
    }
  ]

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <section class="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_1.jpg")})` }}>
        <div class="overlay js-fullheight"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                class="fa fa-chevron-right"></i></a></span> <span>Hotel <i class="fa fa-chevron-right"></i></span></p>
              <h1 class="mb-0 bread">Hotel</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1">
                <form action="#" class="search-property-1">
                  <div class="row no-gutters">
                    <div class="col-lg d-flex">
                      <div class="form-group p-4 border-0">
                        <label for="#">Destination</label>
                        <div class="form-field">
                          <div class="icon"><span class="fa fa-search"></span></div>
                          <input type="text" class="form-control" placeholder="Search place" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg d-flex">
                      <div class="form-group p-4">
                        <label for="#">Check-in date</label>
                        <div class="form-field">
                          <div class="icon"><span class="fa fa-calendar"></span></div>
                          <input type="text" class="form-control checkin_date" placeholder="Check In Date" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg d-flex">
                      <div class="form-group p-4">
                        <label for="#">Check-out date</label>
                        <div class="form-field">
                          <div class="icon"><span class="fa fa-calendar"></span></div>
                          <input type="text" class="form-control checkout_date" placeholder="Check Out Date" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg d-flex">
                      <div class="form-group p-4">
                        <label for="#">Price Limit</label>
                        <div class="form-field">
                          <div class="select-wrap">
                            <div class="icon"><span class="fa fa-chevron-down"></span></div>
                            <select name="" id="" class="form-control">
                              <option value="">$5,000</option>
                              <option value="">$10,000</option>
                              <option value="">$50,000</option>
                              <option value="">$100,000</option>
                              <option value="">$200,000</option>
                              <option value="">$300,000</option>
                              <option value="">$400,000</option>
                              <option value="">$500,000</option>
                              <option value="">$600,000</option>
                              <option value="">$700,000</option>
                              <option value="">$800,000</option>
                              <option value="">$900,000</option>
                              <option value="">$1,000,000</option>
                              <option value="">$2,000,000</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg d-flex">
                      <div class="form-group d-flex w-100 border-0">
                        <div class="form-field w-100 align-items-center d-flex">
                          <input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
          <div class="row">

          {
            hotelList.map((value, index) => {
              return(
                <HotelListComponent hotel={value} key={index}></HotelListComponent>
              )
            })
          }
            
          </div>
          <div class="row mt-5">
            <div class="col text-center">
              <div class="block-27">
                <ul>
                  <li><a href="#">&lt;</a></li>
                  <li class="active"><span>1</span></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><a href="#">&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent></FooterComponent>

    </div>
  );
};

export default HotelScreen;