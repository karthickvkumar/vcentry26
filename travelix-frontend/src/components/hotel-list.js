import React from 'react';

const HotelListComponent = (props) => {
    return (
        <div class="col-md-4">
              <div class="project-wrap hotel">
                <a href="#" class="img" style={{ backgroundImage: `url(${props.hotel.hotel_image})` }}>
                  <span class="price">${props?.hotel?.hotel_price}/person</span>
                </a>
                <div class="text p-4">
                  <p class="star mb-2">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </p>
                  <span class="days">8 Days Tour</span>
                  <h3><a href="#">{props?.hotel?.hotel_name}</a></h3>
                  <p class="location"><span class="fa fa-map-marker"></span>{props?.hotel?.hotel_location}</p>
                  <ul>
                    <li><span class="flaticon-shower"></span>{props?.hotel?.room_count}</li>
                    <li><span class="flaticon-king-size"></span>{props?.hotel?.room_bed_count}</li>
                    <li><span class="flaticon-mountains"></span>{props?.hotel?.room_facing}</li>
                  </ul>
                </div>
              </div>
            </div>
    );
};

export default HotelListComponent;