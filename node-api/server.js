import express from "express";
import cors from "cors";
import http from "http";

const app = express();

const server = http.createServer(app);

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

app.use(express.json());

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

   if(index > -1){
    studentList.splice(index, 1);
    response.status(200).send("Successfully deleted");
   }
   else{
    response.status(400).send("Invalid User Name or Selection");
   }
});


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node is running on port number 4000");
});
