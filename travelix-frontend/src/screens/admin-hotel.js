import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AdminHotel = () => {
    const [hotel, updateHotel] = useState({
        hotelName : "",
        hotelPrice : "",
        hotelLocation : "",
        hotelImage : ""
    });

    const [hotelList, updateHotelList] = useState([]);

    useEffect(() => {
        getAllHotels();
    }, []);

    const handleInputField = (event) => {
        updateHotel({...hotel, [event.target.id] : event.target.value});
    }

    const addNewHotel = () => {
        // console.log(hotel);
        const url = "http://localhost:4000/api/upload/hotel";

        axios.post(url, hotel)
            .then((response) => {
                getAllHotels();
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const uploadImage = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);

        reader.onload = () => {
            // console.log(reader.result);
            updateHotel({...hotel, [event.target.id] : reader.result});
        }
    }

    const getAllHotels = () => {
        const url = "http://localhost:4000/api/list/hotels";

        axios.get(url)
            .then((response) => {
                updateHotelList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteHotel = (id) => {
        const url = "http://localhost:4000/api/delete/hotel/" + id;
        axios.delete(url)
            .then((response) => {
                getAllHotels();
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <h3>Add Hotel</h3>
            <div>
                <label>Enter Hotel Name</label>
                <input type="text" placeholder='Hotel name' id="hotelName" onChange={handleInputField} />
            </div>
            <div>
                <label>Enter Hotel Price</label>
                <input type="number" placeholder='Hotel Price' id="hotelPrice" onChange={handleInputField} />
            </div>
            <div>
                <label>Enter Hotel Location</label>
                <input type="text" placeholder='Hotel location' id="hotelLocation" onChange={handleInputField} />
            </div>
            <div>
                <label>Upload Hotel Image</label>
                <input type='file' accept='.png,.jpg,.jpeg' id="hotelImage" onChange={uploadImage}/>
            </div>
            <button onClick={() => addNewHotel()}>Add New Hotel</button>

            <table>
                <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Hotel Location</th>
                        <th>Hotel Price</th>
                        <th>Hotel Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hotelList.map((value, index) => {
                            return(
                                <tr key={index}>
                                    <td>{value.hotelName}</td>
                                    <td>{value.hotelLocation}</td>
                                    <td>${value.hotelPrice}</td>
                                    <td>
                                        <img src={value.hotelImage} width="50" />
                                    </td>
                                    <td>
                                        <button onClick={() => deleteHotel(value.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                </tbody>
            </table>
        </div>
    );
};

export default AdminHotel;