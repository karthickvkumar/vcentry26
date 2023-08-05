import React, { useState } from 'react';
import axios from 'axios';

const AccountProfileScreen = () => {

  const [ studentForm, updateStudentForm ] = useState({
    name : "",
    location : ""
  });

  const loadStudent = () => {
    const url = "http://localhost:4000/api/list";

    axios.get(url)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const onHandleInput = (event) => {
    updateStudentForm({...studentForm, [event.target.id] : event.target.value  });
  }

  const submitStudent = () => {
    // console.log(studentForm);
    const url = "http://localhost:4000/api/create/list";

    axios.post(url, studentForm)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <h2>This is a Account Profile Screen</h2>
      <button onClick={() => loadStudent()}>Load Student</button>

      <div>
        <label>Enter your Name :</label>
        <input type="text" id="name" placeholder='Enter Name' onChange={onHandleInput} />
      </div>
      <div>
        <label>Enter your Location :</label>
        <input type="text" id="location" placeholder='Enter Location' onChange={onHandleInput} />
      </div>
      <button onClick={() => submitStudent()}>Submit Student</button>
    </div>
  );
};

export default AccountProfileScreen;