import mongoose from "mongoose";
import dotenv from "dotenv";
import { maxLength, minLength } from "zod";
dotenv.config();

const MONGO_URL = process.env.MONGO_URI;

mongoose.connect(MONGO_URL);

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, minLength: 8},
    firstname: {type: String, required: true, maxLength: 50},
    lastname: {type: String, required: false, maxLength: 50},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const User = mongoose.model("User", UserSchema);

export default User;