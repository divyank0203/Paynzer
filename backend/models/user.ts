import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    firstname: { type: String, required: true, trim: true, maxLength: 25},
    lastname: { type: String, required: false, trim: true, maxLength: 35},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, minLength: 6},

},
{
    timestamps: true,
})

const User = mongoose.model<IUser>("User", UserSchema);

export default User