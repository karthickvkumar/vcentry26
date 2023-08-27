import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFoundScreen = () => {
  return (
    <div>
      <h1>This page is not Available</h1>
      <NavLink to="/">Go back to Home</NavLink>
    </div>
  );
};

export default PageNotFoundScreen;