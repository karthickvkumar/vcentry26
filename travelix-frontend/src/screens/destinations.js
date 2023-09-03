import React from 'react';
import HeaderComponent from "../components/header";
import DestinationComponent from '../components/destination-list';
import FooterComponent from '../components/footer';
import TourSearchComponent from "../components/tour-search";

const DestinationScreen = () => {

  const destinationList = [ 
    { tour_location: "India",
      tour_image : "https://images.nationalgeographic.org/image/upload/v1638889927/EducationHub/photos/pebble-beach.jpg",
      tour_count : 10
    },
    { tour_location: "America",
      tour_image : "https://m.economictimes.com/thumb/msid-75933565,width-1200,height-900,resizemode-4,imgsize-208887/us-flag-getty.jpg",
      tour_count : 20
    },
    { tour_location: "France",
      tour_image : "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg",
      tour_count : 15
    }
  ]

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
                <TourSearchComponent></TourSearchComponent>
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
          <div className="row mt-5">
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
          </div>
        </div>
      </section>

      <FooterComponent></FooterComponent>
    </div>
  );
};

export default DestinationScreen;