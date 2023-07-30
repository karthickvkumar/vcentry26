import React from 'react';
import axios from 'axios';

const AccountProfileScreen = () => {

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

  return (
    <div>
      <h2>This is a Account Profile Screen</h2>
      <button onClick={() => loadStudent()}>Load Student</button>
    </div>
  );
};

export default AccountProfileScreen;