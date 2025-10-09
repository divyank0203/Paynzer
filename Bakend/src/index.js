import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
const app = express();
import User from "./db.js";
import { ConnectDB } from "./db.js";

dotenv.config();

ConnectDB();

const corsOptions = {
  origin: 'http://localhost:5173/', 
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use("/api/v1", router);

app.get('/', function(req, res, next){
    res.send("Hello World!");
    next();
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});