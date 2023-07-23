import React, { useState } from "react";

const RegisterScreen = () => {
  const [account, updateAccount] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Date_Of_Birth: "",
    Gender: "",
    Hobbies: [],
    Address: "",
    City: "",
  });

  const [accountError, updateAccountError] = useState({
    FirstName: false,
    LastName: false,
    Email: false,
    Password: false,
    Date_Of_Birth: false,
    Gender: false,
    Hobbies: false,
    Address: false,
    City: false,
  });

  const [passwordVisiblity, UpatePasswordVisblity] = useState(true);

  const handleInput = (event) => {
    if (event.target.id === "Hobbies") {
      if (event.target.checked) {
        // insert hobbies
        account.Hobbies.push(event.target.value);
      } else {
        // remove hobbies
        const index = account.Hobbies.indexOf(event.target.value);
        account.Hobbies.splice(index, 1);
      }
    } else {
      updateAccount({ ...account, [event.target.id]: event.target.value });
    }
  };

  const submitAccount = () => {
    console.log(account);

    updateAccountError({
      ...accountError,
      FirstName: account.FirstName === "" ? true : false,
      LastName: account.LastName === "" ? true : false,
      Email: account.Email === "" ? true : false,
      Password: account.Password === "" ? true : false,
      Date_Of_Birth: account.Date_Of_Birth === "" ? true : false,
      Gender: account.Gender === "" ? true : false,
      Hobbies: account.Hobbies.length === 0 ? true : false,
      Address: account.Address === "" ? true : false,
      City: account.City === "" ? true : false,
    });
  };

  const makePasswordVisible = () => {
    UpatePasswordVisblity(false);
  };

  const makePasswordHide = () => {
    UpatePasswordVisblity(true);
  };

  return (
    <div>
      <h2>Create a New Account</h2>
      <div className="space">
        <label className="label">Enter First Name</label>
        <input
          type="text"
          placeholder="First Name"
          className="textbox"
          id="FirstName"
          onChange={handleInput}
        />
        {accountError.FirstName && (
          <span className="error-msg">Please enter a valid First Name</span>
        )}
      </div>
      <div className="space">
        <label className="label">Enter Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          className="textbox"
          id="LastName"
          onChange={handleInput}
        />
        {accountError.LastName && (
          <span className="error-msg">Please enter a valid Last Name</span>
        )}
      </div>
      <div className="space">
        <label className="label">Enter Email Id</label>
        <input
          type="text"
          placeholder="Email Id"
          className="textbox"
          id="Email"
          onChange={handleInput}
        />
        {accountError.Email && (
          <span className="error-msg">Please enter a valid Email Id</span>
        )}
      </div>
      <div className="space">
        <label className="label">Enter Password</label>
        <input
          type={passwordVisiblity ? "password" : "text"}
          placeholder="Password"
          className="textbox"
          id="Password"
          onChange={handleInput}
        />

        {passwordVisiblity ? (
          <img
            src={require("../images/close-eye.png")}
            width="16"
            onClick={() => makePasswordVisible()}
          />
        ) : (
          <img
            src={require("../images/open-eye.png")}
            width="16"
            onClick={() => makePasswordHide()}
          />
        )}
        {accountError.Password && (
          <span className="error-msg">Please enter a valid Password</span>
        )}
      </div>
      <div className="space">
        <label className="label">Select Date of Birth</label>
        <input
          type="date"
          className="textbox"
          onChange={handleInput}
          id="Date_Of_Birth"
        />
        {accountError.Date_Of_Birth && (
          <span className="error-msg">Please select a valid Date of Birth</span>
        )}
      </div>
      <div className="space">
        <label className="label">Select your Gender</label>
        <input
          type="radio"
          name="gender"
          onChange={handleInput}
          value="Male"
          id="Gender"
        />
        Male
        <input
          type="radio"
          name="gender"
          onChange={handleInput}
          value="Female"
          id="Gender"
        />
        Female
        <input
          type="radio"
          name="gender"
          onChange={handleInput}
          value="Others"
          id="Gender"
        />
        Others
        {accountError.Gender && (
          <span className="error-msg">Please select a Gender</span>
        )}
      </div>
      <div className="space">
        <label className="label">Select your Hobbies</label>
        <input
          type="checkbox"
          onChange={handleInput}
          value="Cricket"
          id="Hobbies"
        />
        Cricket
        <input
          type="checkbox"
          onChange={handleInput}
          value="Football"
          id="Hobbies"
        />
        Football
        <input
          type="checkbox"
          onChange={handleInput}
          value="Hockey"
          id="Hobbies"
        />
        Hockey
        <input
          type="checkbox"
          onChange={handleInput}
          value="Baseball"
          id="Hobbies"
        />
        Baseball
        <input
          type="checkbox"
          onChange={handleInput}
          value="Golf"
          id="Hobbies"
        />
        Golf
        <input
          type="checkbox"
          onChange={handleInput}
          value="Chess"
          id="Hobbies"
        />
        Chess
        {accountError.Hobbies && (
          <span className="error-msg">Please select at least one hobbies</span>
        )}
      </div>
      <div className="vertical-center space">
        <label className="label">Enter Address</label>
        <textarea
          placeholder="Address"
          className="textbox"
          onChange={handleInput}
          id="Address"
        ></textarea>
        {accountError.Address && (
          <span className="error-msg">Please enter a valid Address</span>
        )}
      </div>
      <div className="space">
        <label className="label">Select your City</label>
        <select
          defaultValue={""}
          className="textbox"
          onChange={handleInput}
          id="City"
        >
          <option disabled value="">
            Choose your City
          </option>
          <option>Chennai</option>
          <option>Trichy</option>
          <option>Madurai</option>
          <option>Erode</option>
          <option>Coimbatore</option>
          <option>Salem</option>
        </select>
        {accountError.City && (
          <span className="error-msg">Please select any city</span>
        )}
      </div>
      <div className="space">
        <button onClick={() => submitAccount()}>Create My Account</button>
      </div>
    </div>
  );
};

export default RegisterScreen;
