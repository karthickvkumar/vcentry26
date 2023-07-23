import React from 'react';
import axios from 'axios';

const BasicProfileScreen = () => {

  const loadUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2"
    axios.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div>
      <h2>This is a Basic Profile Screen</h2>
      <button onClick={() => loadUserProfile()}>Load Users</button>
    </div>
  );
};

export default BasicProfileScreen;