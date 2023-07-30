import express from "express";
import cors from "cors";
import http from "http";

const app = express();

const server = http.createServer(app);


const portNumber = 4000;
server.listen(portNumber, () => {
  console.log("Node is running on port number 4000");
})
