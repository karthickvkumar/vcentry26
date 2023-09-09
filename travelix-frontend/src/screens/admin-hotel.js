import React, {useState} from 'react';

const AdminHotel = () => {
    const [hotel, updateHotel] = useState({
        hotelName : "",
        hotelPrice : "",
        hotelLocation : "",
        hotelImage : ""
    });

    const handleInputField = (event) => {
        updateHotel({...hotel, [event.target.id] : event.target.value});
    }

    const addNewHotel = () => {
        console.log(hotel);
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
        </div>
    );
};

export default AdminHotel;