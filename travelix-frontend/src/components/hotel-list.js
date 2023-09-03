import React from 'react';

const HotelListComponent = (props) => {
    return (
        <div className="col-md-4">
              <div className="project-wrap hotel">
                <a href="#" className="img" style={{ backgroundImage: `url(${props?.hotel?.hotel_image})` }}>
                  <span className="price">${props?.hotel?.hotel_price}/person</span>
                </a>
                <div className="text p-4">
                  <p className="star mb-2">
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </p>
                  <span className="days">8 Days Tour</span>
                  <h3><a href="#">{props?.hotel?.hotel_name}</a></h3>
                  <p className="location"><span className="fa fa-map-marker"></span>{props?.hotel?.hotel_location}</p>
                  <ul>
                    <li><span className="flaticon-shower"></span>{props?.hotel?.room_count}</li>
                    <li><span className="flaticon-king-size"></span>{props?.hotel?.room_bed_count}</li>
                    <li><span className="flaticon-mountains"></span>{props?.hotel?.room_facing}</li>
                  </ul>
                </div>
              </div>
            </div>
    );
};

export default HotelListComponent;