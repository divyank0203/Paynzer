import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

const MONGO_URL = process.env.MONGO_URI;

const ConnectDB = async function(){
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, minLength: 4},
    password: {type: String, required: true, minLength: 8},
    firstName: {type: String, required: true, minLength: 2, maxLength: 50},
    lastName: {type: String, required: false, minLength: 2, maxLength: 50},

})

const User = mongoose.model("User", UserSchema);

export default User;
export {ConnectDB};
