import React, {useState, useEffect} from 'react';
import axios from 'axios';

const AdminDestination = () => {

    // const baseURL = "http://localhost:4000/api";
    const baseURL = "https://travelix-api.onrender.com/api";

    const [destination, updateDestination] = useState({
        destinationName : "",
        destinationImage : "",
        destinationCount : ""
    });

    const [destinationList, updateDestinationList] = useState([]);

    useEffect(() => {
        loadDestinationList();
    }, []);

    const loadDestinationList = () => {
        const url = baseURL+ "/list/destination";
        axios.get(url)
            .then((response) => {
                updateDestinationList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleInputField = (event) => {
        updateDestination({...destination, [event.target.id] : event.target.value});
    }

    const addNewDestionation = () => {
        console.log(destination);
        const url = baseURL+ "/upload/destination";

        axios.post(url, destination)
            .then((response) => {
                loadDestinationList();
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

    const deleteDestination = (id) => {
        const url = baseURL+ "/delete/destination/" + id;

        axios.delete(url)
            .then((response) => {
                loadDestinationList();
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            })
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
            <table>
                <thead>
                    <tr>
                        <th>Destination Name</th>
                        <th>Destination Count</th>
                        <th>Destination Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    destinationList.map((value, index) => {
                        return(
                            <tr key={index}>
                                <td>{value.destinationName}</td>
                                <td>{value.destinationCount}</td>
                                <td>
                                    <img src={value.destinationImage}  width="50"/>
                                </td>
                                <td> <button onClick={() => deleteDestination(value.id)}>Delete</button> </td>
                            </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
    );
};

export default AdminDestination;