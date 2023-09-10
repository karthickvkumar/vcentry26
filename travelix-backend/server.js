import express from "express";
import cors from "cors";
import mysql from "mysql";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
    credentials: true,
    origin : "*"
}))

app.use(express.json({
    limit : "50mb"
}));

const connection = mysql.createConnection({
    host : "db4free.net",
    user: "vcentry",
    password : "test@123",
    database : "travelix",
    port : 3306
  });
  
  connection.connect((error) => {
    if(error){
      throw error;
    }
    else{
      console.log("MySQL DataBase connected with NodeJS");
    }
  })

app.get("/", (request, response) => {
    response.status(200).send("API Server is Up and Running");
});

// http://localhost:4000/api/upload/destination
app.post("/api/upload/destination", (request, response) => {
    const data = request.body;
    // console.log(data);

    const sqlQuery = `insert into karthick_destinations (destinationName, destinationImage, destinationCount) values ('${data.destinationName}', '${data.destinationImage}', '${data.destinationCount}')`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(200).send({
                message : "Destination has been uploaded"
            })
        }
    })
});

// Search Destination
// http://localhost:4000/api/list/destination?destinationName=india

// Show All Destination
// http://localhost:4000/api/list/destination
app.get("/api/list/destination", (request, response) => {

    let sqlQuery;
    const destName = request.query.destinationName;
    if(destName == undefined){
        sqlQuery = "select * from karthick_destinations";
    }
    else{
        sqlQuery = `select * from karthick_destinations where destinationName='${destName}'`
    }
    
    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(200).send(result);
        }
    })

})

// http://localhost:4000/api/delete/destination/2
app.delete("/api/delete/destination/:id", (request, response) => {
    const id = request.params.id;

    const sqlQuery =  `delete from karthick_destinations where id=${id}`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(200).send({
                message : "Destination has been deleted"
            })
        }
    })
})


// http://localhost:4000/api/upload/hotel
app.post("/api/upload/hotel", (request, response) => {
    const data = request.body;
    // console.log(data);

    const sqlQuery = `insert into karthick_hotels (hotelName, hotelPrice, hotelLocation, hotelImage) values ('${data.hotelName}', '${data.hotelPrice}', '${data.hotelLocation}', '${data.hotelImage}')`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(200).send({
                message : "Hotel has been uploaded"
            })
        }
    })
});

// Search Hotels
// http://localhost:4000/api/list/hotels?hotelName=""

//Get All Hotels
// http://localhost:4000/api/list/hotels
app.get("/api/list/hotels", (request, response) => {
    let sqlQuery;
    const hotelName = request.query.hotelName;
    if(hotelName == undefined){
        sqlQuery = "select * from karthick_hotels";
    }
    else{
        sqlQuery = `select * from karthick_hotels where hotelName='${hotelName}'`
    }
    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(200).send(result);
        }
    })
})

// http://localhost:4000/api/delete/hotel/2
app.delete("/api/delete/hotel/:id", (request, response) => {
    const id = request.params.id;

    const sqlQuery = `delete from karthick_hotels where id=${id}`;

    connection.query(sqlQuery, (error, result) => {
        if(error){
            response.status(500).send(error);
        }
        else{
            response.status(200).send({
                message : "Hotel has been deleted"
            })
        }
    })

})

const portNumber = 4000;
server.listen(portNumber, () => {
    console.log("Server is running on Port " + portNumber);
})

/*
USE travelix;
CREATE TABLE karthick_destinations (destinationName varchar(255), destinationImage longtext, destinationCount varchar(255), id int not null AUTO_INCREMENT, PRIMARY KEY(id));


USE travelix;
CREATE TABLE karthick_hotels (hotelName varchar(255), hotelPrice varchar(255), hotelLocation varchar(255), hotelImage longtext, id int not null AUTO_INCREMENT, PRIMARY KEY(id));

*/