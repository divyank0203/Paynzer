import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
import User from "./db.js";
import { ConnectDB } from "./db.js";

dotenv.config();

ConnectDB();

app.use(express.json());

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});