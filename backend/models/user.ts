import mongoose, { Schema } from "mongoose";

export interface IUser extends mongoose.Document{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
    firstname: { type: String, required: true},
    lastname: { type: String, required: false},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, minLength: 8},

},
{
    timestamps: true,
})

const User = mongoose.model<IUser>("User", UserSchema);

export default User