import React, {useState} from 'react';
import axios from 'axios';

const AdminDestination = () => {

    const [destination, updateDestination] = useState({
        destinationName : "",
        destinationImage : "",
        destinationCount : ""
    });

    const handleInputField = (event) => {
        updateDestination({...destination, [event.target.id] : event.target.value});
    }

    const addNewDestionation = () => {
        console.log(destination);
        const url = "http://localhost:4000/api/upload/destination";

        axios.post(url, destination)
            .then((response) => {
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
            updateDestination({...destination, [event.target.id] : reader.result});
        }
    }


    return (
        <div>
            <h3>Add Destinations</h3>
            <div>
                <label>Enter Destination Name</label>
                <input type="text" placeholder='Destination name' id="destinationName" onChange={handleInputField} />
            </div>
            <div>
                <label>Enter Destination Tour Count</label>
                <input type="number" placeholder='Destination tour count' id="destinationCount" onChange={handleInputField} />
            </div>
            <div>
                <label>Upload Destination Image</label>
                <input type='file' accept='.png,.jpg,.jpeg' id="destinationImage" onChange={uploadImage}/>
            </div>
            <button onClick={() => addNewDestionation()}>Add New Destination</button>
        </div>
    );
};

export default AdminDestination;