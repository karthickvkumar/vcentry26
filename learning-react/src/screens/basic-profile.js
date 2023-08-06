import React, {useState, useEffect} from 'react';
import axios from 'axios';

const BasicProfileScreen = () => {

  const [ profileData, updateProfileData ] = useState([]);
  const [ infoData, updateInfoData ] = useState([]);

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2"
    axios.get(url)
      .then((response) => {
        console.log(response.data.data);

        updateProfileData(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadInformation = () => {
    const url = "https://reqres.in/api/unknown"
    axios.get(url)
      .then((response) => {
        updateInfoData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  var listInfo = infoData.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>
          <span>Code : {value.color}</span>
          <span className='small-box' style={{ backgroundColor : value.color}}></span>
        </td>
        <td>{value.name}</td>
        <td>{value.year}</td>
      </tr>
    )
  })
  
  var list = profileData.map((value, index) => {
    return(
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.first_name}</td>
        <td>{value.last_name}</td>
        <td>{value.email}</td>
        <td>
          <img src={value.avatar} alt='' width="35" />
        </td>
      </tr>
    )
  })

  return (
    <div>
      <h2>This is a Basic Profile Screen</h2>
      <button onClick={() => loadUserProfile()}>Load Users</button>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          { list }
        </tbody>
      </table>

      <h2>List Information</h2>
      <button onClick={() => loadInformation()}>Load Information</button>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Color</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          { listInfo }
        </tbody>
      </table>
    </div>
  );
};

export default BasicProfileScreen;