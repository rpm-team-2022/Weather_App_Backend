require("events").EventEmitter.defaultMaxListeners = 15;

const express=require('express')
const server=express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userAuth=require('./router/userAuth')
const bodyParser = require("body-parser");





server.use(express.json());
server.use(cors());
server.use(cookieParser());
server.use('/auth',userAuth)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.text());
server.use(bodyParser.json({ type: "application/vnd.api+json" }));
server.use(express.static("./build"))
server.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "./build/index.html"));
});


// server.get("/",(req,res)=>{
//     res.send("Welcome to the weather app")
// })


server.use((err, req, res, next) => {
    res.status(500).json({ message: "Server Error" });
  });

module.exports=server;