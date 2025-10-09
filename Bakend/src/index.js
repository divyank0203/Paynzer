
import dotenv from "dotenv";
dotenv.config();

import express from "express";


import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
import User, { ConnectDB } from "./db.js";





const startServer = async function(){
    try{
        await ConnectDB();
        console.log("Database connected");

        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    }catch(error){
        console.log(error);

    }
}

const corsOptions = {
  origin: 'http://localhost:5173/', 
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use("/api/v1", router);

app.get('/', function(req, res){
    res.send("Hello World!");
   
})

startServer();