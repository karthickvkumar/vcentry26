import React, {useState} from 'react';

const RegisterScreen = () => {

  const [ account, updateAccount ] = useState({
    FirstName : "",
    LastName : "",
    Email : "",
    Password : "",
    Date_Of_Birth : "",
    Gender : "",
    Hobbies : [],
    Address : "",
    City : ""
  })

  const handleInput = (event) => {
    if(event.target.id == "Hobbies"){

      if(event.target.checked){
        // insert hobbies
        account.Hobbies.push(event.target.value);
      }
      else{
        // remove hobbies
        const index = account.Hobbies.indexOf(event.target.value);
        account.Hobbies.splice(index, 1);
      }

    }
    else{
      updateAccount({...account, [event.target.id] : event.target.value});
    }
  }

  const submitAccount = () => {
    console.log(account);
  }

  return (
    <div>
      <h2>Create a New Account</h2>
      <div className="space">
        <label className="label">Enter First Name</label>
        <input type="text" placeholder="First Name" className='textbox' id="FirstName" onChange={handleInput}/>
      </div>
      <div className="space">
        <label className="label">Enter Last Name</label>
        <input type="text" placeholder="Last Name" className='textbox' id='LastName' onChange={handleInput}/>
      </div>
      <div className="space">
        <label className="label">Enter Email Id</label>
        <input type="text" placeholder="Email Id" className='textbox' id='Email' onChange={handleInput}/>
      </div>
      <div className="space">
        <label className="label">Enter Password</label>
        <input type="text" placeholder="Password" className='textbox' id="Password" onChange={handleInput}/>
      </div>
      <div className="space">
        <label className="label">Select Date of Birth</label>
        <input type="date" className='textbox' onChange={handleInput} id="Date_Of_Birth"/>
      </div>
      <div className="space">
        <label className="label">Select your Gender</label>
        <input type="radio" name='gender' onChange={handleInput} value="Male" id="Gender"/>Male
        <input type="radio" name='gender' onChange={handleInput} value="Female" id="Gender"/>Female
        <input type="radio" name='gender' onChange={handleInput} value="Others" id="Gender"/>Others
      </div>
      <div className="space">
        <label className="label">Select your Hobbies</label>
        <input type='checkbox' onChange={handleInput} value="Cricket" id="Hobbies"/>Cricket
        <input type='checkbox' onChange={handleInput} value="Football" id="Hobbies"/>Football
        <input type='checkbox' onChange={handleInput} value="Hockey" id="Hobbies"/>Hockey
        <input type='checkbox' onChange={handleInput} value="Baseball" id="Hobbies"/>Baseball
        <input type='checkbox' onChange={handleInput} value="Golf" id="Hobbies"/>Golf
        <input type='checkbox' onChange={handleInput} value="Chess" id="Hobbies"/>Chess
      </div>
      <div className='vertical-center space'>
        <label className="label">Enter Address</label>
        <textarea placeholder='Address' className='textbox' onChange={handleInput} id="Address"></textarea>
      </div>
      <div className='space'>
        <label className="label">Select your City</label>
        <select defaultValue={""} className='textbox' onChange={handleInput} id="City">
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
        <button onClick={() => submitAccount()}>Create My Account</button>
      </div>
    </div>
  );
};

export default RegisterScreen;