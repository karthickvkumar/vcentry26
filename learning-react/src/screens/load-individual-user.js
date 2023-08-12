import axios from 'axios';
import React, {useEffect, useState} from 'react';

import { NavLink, useParams } from "react-router-dom";

const LoadIndividualUserScreen = () => {

  const params = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    const url = "http://localhost:4000/api/user/" + params.index;

    axios.get(url)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

  })


  return (
    <div>
      <h3>Profile Information</h3>
      <h2>Name : {user.name}</h2>
      <h2>Location : {user.location}</h2>

      <NavLink to="/profile/account">Go to back</NavLink>
    </div>
  );
};

export default LoadIndividualUserScreen;