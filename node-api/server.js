import express from "express";
import cors from "cors";
import http from "http";

const app = express();

const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json());

// http://localhost:4000/api/list
app.get("/api/list", (request, response) => {
  const studentList = ["Muthu", "Suman", "Vinod", "Sandy", "Tharun"];

  response.status(200).send(studentList);
});


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node is running on port number 4000");
})
