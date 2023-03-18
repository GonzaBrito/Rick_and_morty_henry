const express = require("express");
const server = express();
const morgan = require("morgan");
const PORT = 3001;
const router = require("../src/routes/index");
const cors = require("cors");

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);

server.listen(PORT, () =>{
    console.log("Server raised in port " + PORT);
});



























// const fs = require("fs");
// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// //const characters = require("./utils/data");

// const PORT = 3001;

// http
//     .createServer((req, res) =>{
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         const id = req.url.split("/").pop();
        
//         if(req.url.includes("onsearch")){
//             getCharById(res, id)
//         }

//         if(req.url.includes("onsearch")){
//             getCharDetail(res, id)
//         }

//     })
//     .listen(PORT, "localhost");





    
    // if(req.url.includes("rickandmorty/character")){
    //     console.log(req.url.split("/"));
    //     // const id = req.url.split("/").pop();
    //     // const id = req.url.split("/").[3];

    //     const id = req.url.split("/").at(-1);
    //     console.log(id);

    //     const character = characters.filter((char) => char.id === Number(id));

    //     res
    //     .writeHead(200, {"content-type": "application-json"})
    //     .end(JSON.stringify(character[0]));
    // }