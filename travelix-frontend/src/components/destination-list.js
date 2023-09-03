import React from 'react';

const DestinationComponent = (props) => {
    // console.log(props);
    return (
        <div class="col-md-4 m-btm-40">
            <div class="item">
            <div class="project-destination">
                <a href="#" class="img" style={{ backgroundImage: `url(${props?.destinaiton?.tour_image})` }}>
                <div class="text">
                    <h3>{props?.destinaiton?.tour_location}</h3>
                    <span>{props?.destinaiton?.tour_count} Tours</span>
                </div>
                </a>
            </div>
            </div>
        </div>
    );
};

export default DestinationComponent;