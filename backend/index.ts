import express from "express";
import connectDB from "./db";
const app = express();
app.use(express.json())

connectDB();


app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
})