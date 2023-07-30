import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const ProfileScreen = () => {
  return (
    <div className='container'>
      <div className='profile-header'> 
        <h1>This is a Profile Screen</h1>
      </div>
      <div className='pofile-content'>
      
        <div className='profile-sidebar'>
          <NavLink to="/profile/basic">Basic Profile Screen</NavLink>
          <br/>
          <NavLink to="/profile/account">Account Profile Screen</NavLink>
          <br/>
          <NavLink to="/profile/setting">Setting Profile Screen</NavLink>
          <br/>
          <NavLink to="/profile/login">Login Profile Screen</NavLink>
        </div>
        <div className='profile-sub-screens'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;