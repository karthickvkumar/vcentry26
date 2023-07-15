import React from 'react';

const RegisterScreen = () => {
  return (
    <div>
      <h2>Create a New Account</h2>
      <div className="space">
        <label className="label">Enter First Name</label>
        <input type="text" placeholder="First Name" className='textbox'/>
      </div>
      <div className="space">
        <label className="label">Enter Last Name</label>
        <input type="text" placeholder="Last Name" className='textbox'/>
      </div>
      <div className="space">
        <label className="label">Enter Email Id</label>
        <input type="text" placeholder="Email Id" className='textbox'/>
      </div>
      <div className="space">
        <label className="label">Enter Password</label>
        <input type="text" placeholder="Password" className='textbox'/>
      </div>
      <div className="space">
        <label className="label">Select Date of Birth</label>
        <input type="date" className='textbox' />
      </div>
      <div className="space">
        <label className="label">Select your Gender</label>
        <input type="radio" name='gender'/>Male
        <input type="radio" name='gender'/>Female
        <input type="radio" name='gender'/>Others
      </div>
      <div className="space">
        <label className="label">Select your Hobbies</label>
        <input type='checkbox' />Cricket
        <input type='checkbox' />Football
        <input type='checkbox' />Hockey
        <input type='checkbox' />Baseball
        <input type='checkbox' />Golf
        <input type='checkbox' />Chess
      </div>
      <div className='vertical-center space'>
        <label className="label">Enter Address</label>
        <textarea placeholder='Address' className='textbox'></textarea>
      </div>
      <div className='space'>
        <label className="label">Select your City</label>
        <select defaultValue={""} className='textbox'>
          <option disabled value="">Choose your City</option>
          <option>Chennai</option>
          <option>Trichy</option>
          <option>Madurai</option>
          <option>Erode</option>
          <option>Coimbatore</option>
          <option>Salem</option>
        </select>
      </div>
      <div className='space'>
        <button>Create My Account</button>
      </div>
    </div>
  );
};

export default RegisterScreen;