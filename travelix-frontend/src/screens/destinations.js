import React, { useEffect, useState } from 'react';
import HeaderComponent from "../components/header";
import DestinationComponent from '../components/destination-list';
import FooterComponent from '../components/footer';
import TourSearchComponent from "../components/tour-search";
import axios from 'axios';

const DestinationScreen = () => {

  const [destinationList, updateDestinationList] = useState([]);

  useEffect(() => {
    getAllHotels();
  }, []); 
  
  const getAllHotels = () => {
    const url = "http://localhost:4000/api/list/destination";

    axios.get(url)
        .then((response) => {
          updateDestinationList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
  }



  const searchTourAPI = (filterValue) => {
    // axios api call
    // debugger;
    // console.log(filterValue);
    const url = "http://localhost:4000/api/list/destination?destinationName=" + filterValue.destination;

    axios.get(url)
      .then((response) => {
        updateDestinationList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: `url(${require("../images/bg_4.jpg")})` }}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                className="fa fa-chevron-right"></i></a></span> <span>Tour List <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">Tours List</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="search-wrap-1">
                <TourSearchComponent callback={searchTourAPI}></TourSearchComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row">

            {
              destinationList.map((value, index) => {
                return (
                  <DestinationComponent destinaiton={value}></DestinationComponent>
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

export default DestinationScreen;