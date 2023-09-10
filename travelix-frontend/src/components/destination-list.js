import React from 'react';

const DestinationComponent = (props) => {
    console.log(props);
    return (
        <div className="col-md-4 m-btm-40">
            <div className="item">
            <div className="project-destination">
                <a href="#" className="img" style={{ backgroundImage: `url(${props?.destinaiton?.destinationImage})` }}>
                <div className="text">
                    <h3>{props?.destinaiton?.destinationName}</h3>
                    <span>{props?.destinaiton?.destinationCount} Tours</span>
                </div>
                </a>
            </div>
            </div>
        </div>
    );
};

export default DestinationComponent;