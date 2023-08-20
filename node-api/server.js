import express from "express";
import cors from "cors";
import http from "http";
import mysql from "mysql";

const app = express();

const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());

const connection = mysql.createConnection({
  host : "localhost",
  user: "root",
  password: "Test@123",
  port : 3306,
  database : "practice_db"
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MySQL DataBase connected with NodeJS");
  }
})

const studentList = [
  { name: "Muthu", location: "Chennai" },
  { name: "Suman", location: "Chennai" },
  { name: "Vinod", location: "Chennai" },
  { name: "Sandy", location: "Chennai" },
  { name: "Tharun", location: "Chennai" }
];

// http://localhost:4000/api/list
app.get("/api/list", (request, response) => {

  response.status(200).send(studentList);
});

// http://localhost:4000/api/create/list
app.post("/api/create/list", (request, response) => {
  console.log(request.body);
  studentList.push(request.body);

  response.status(200).send("Student profile has been Created");
})

// http://localhost:4000/api/delete/karthick
app.delete("/api/delete/:name", (request, response) => {
  var name = request.params.name;
  var index = studentList.findIndex((value, index) => {
     return value.name === name
   });

   if(index > -1) {
    studentList.splice(index, 1);
    response.status(200).send("Successfully deleted");
   }
   else{
    response.status(400).send("Invalid User Name or Selection");
   }
});

// http://localhost:4000/api/edit/1
app.put("/api/edit/:index", (request, response) => {
  let index = request.params.index;
  let data = request.body;
  studentList[index] = data;

  response.status(200).send("User updated successfully");

})

// http://localhost:4000/api/user/1
app.get("/api/user/:index", (request, response) => {
  var index = request.params.index;

  var user = studentList[index];
  response.status(200).send(user);

})


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node is running on port number 4000");
});

/*
Task API
GET all Users - https://dummyjson.com/users

GET Single User - https://dummyjson.com/users/1
*/

/*
SQL Query

create database practice_db;
===================================
show databases;
===================================

use practice_db;
create table sample_table(name varchar(255), location varchar(255), id int not null auto_increment, primary key(id));
===================================

use practice_db;
select * from sample_table;

=================================

use practice_db;
insert into sample_table (name, location) values ('Vinod', 'Chennai');


*/

/*
Client does not support authentication protocol requested by server; consider upgrading MySQL client

Run the below command and Run it in MySQL workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
flush privileges;

*/