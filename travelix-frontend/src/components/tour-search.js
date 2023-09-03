import React, {useState} from 'react';

const TourSearchComponent = (props) => {

    const [tourSearch, updateTourSearch] = useState({
        destination : "",
        location : ""
    })

    const handleInput = (event) => {
        updateTourSearch({...tourSearch, [event.target.id] : event.target.value});
    }

    const searchTour = () => {
        // console.log(tourSearch);
        // debugger;
        props.callback(tourSearch);
    }

    return (
        <div
            className="tab-pane show"
            id="v-pills-2"
            role="tabpanel"
            aria-labelledby="v-pills-performance-tab"
        >
            <form action="#" className="search-property-1">
                <div className="row no-gutters">
                    <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                            <label htmlFor="#">Destination</label>
                            <div className="form-field">
                                <div className="icon">
                                    <span className="fa fa-search"></span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search place"
                                    id='destination'
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex">
                        <div className="form-group p-4 border-0">
                            <label htmlFor="#">Location/Area</label>
                            <div className="form-field">
                                <div className="icon">
                                    <span className="fa fa-location-arrow"></span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search place"
                                    id='location'
                                    onChange={handleInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg d-flex">
                        <div className="form-group d-flex w-100 border-0">
                            <div className="form-field w-100 align-items-center d-flex">
                                <input
                                    type="button"
                                    value="Search"
                                    className="align-self-stretch form-control btn btn-primary p-0"
                                    onClick={() => searchTour()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TourSearchComponent;