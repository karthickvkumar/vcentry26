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


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node is running on port number 4000");
});
