import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import NavbarComponent from '../components/navbar';

const AccountProfileScreen = () => {

  const navigate = useNavigate();

  const [ studentForm, updateStudentForm ] = useState({
    name : "",
    location : ""
  });

  const [ editUser, updateEditUser] = useState(undefined);

  useEffect(() => {
    loadStudent();
  }, []);

  const [studentList, updateStudentList] = useState([])

  const loadStudent = () => {
    try{
      const url = "http://localhost:4000/api/list";
  
      axios.get(url)
        .then((response) => {
          updateStudentList(response.data);
        })
        .catch((error) => {
          console.error(error);
        })
    }
    catch(error){
      alert("Somethings went wrong, pls contact admin");
    }
  }

  const onHandleInput = (event) => {
    updateStudentForm({...studentForm, [event.target.id] : event.target.value  });
  }

  const submitStudent = () => {
    // console.log(studentForm);
    const url = "http://localhost:4000/api/create/list";

    axios.post(url, studentForm)
      .then((response) => {
        // console.log(response.data);
        alert(response.data.message);
        loadStudent();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteUser = (value) =>{
    // console.log(value);
    const url = "http://localhost:4000/api/delete/" + value.id;

    axios.delete(url)
      .then((response) => {
        alert(response.data.message);
        loadStudent();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const rewriteUserInfo = (index) => {
    updateEditUser(index);
  }

  const editExistingUser = (index, event) => {
    studentList[index][event.target.id] = event.target.value;
    updateStudentList([...studentList]);
  }


  const saveEditedUser = (id) => {
    updateEditUser(undefined);

    const url = "http://localhost:4000/api/edit/" + id;

    var index = studentList.findIndex((value) => {
      return value.id == id
    });

    const editiedUser = studentList[index];

    axios.put(url, editiedUser)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadUser = (index) => {
    navigate("/user/profile/" + index);
  }

  const list = studentList.map((value, index) => {
    return(
        <div className='user-content' key={index}>
          {editUser === index ? 
            <div>
              <input type='text' className='input' value={value.name} 
                onChange={editExistingUser.bind(this, index)} id="name"/>
              <input type='text' className='input'  value={value.location} onChange={editExistingUser.bind(this, index)} id="location"/>
            </div>
            :
            <div>
              <h3>{value.name}</h3>
              <span>{value.location}</span>
            </div>
            }
          <div>
          {editUser === index ? 
            <i class="bi bi-check-circle-fill" onClick={() => saveEditedUser(value.id)}></i>
            :
            <i class="bi bi-pencil-fill" onClick={() => rewriteUserInfo(index)}></i>
          }


            <i class="bi bi-trash-fill" onClick={() => deleteUser(value)}></i>

          </div>
        </div>
    )
  })

  return (
    <div>
      <h2 className='custome-font'>This is a Account Profile Screen</h2>
      <button onClick={() => loadStudent()}>Load Student</button>
      <NavbarComponent></NavbarComponent>
      <div>
        <label>Enter your Name :</label>
        <input type="text" id="name" placeholder='Enter Name' onChange={onHandleInput} />
      </div>
      <div>
        <label>Enter your Location :</label>
        <input type="text" id="location" placeholder='Enter Location' onChange={onHandleInput} />
      </div>
      <button onClick={() => submitStudent()}>Submit Student</button>
      
      <div className='user-wrap'>
        {list}
      </div>
    </div>
  );
};

export default AccountProfileScreen;