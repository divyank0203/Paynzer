import express from "express";
import { Router } from "express";
import zod from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../db.js";

const jwtsecret = process.env.JWT_SECRET;

const router2 = Router();

const userSchema = zod.object({
    username: zod.string().min(4),
    password: zod.string().min(8),
    firstName: zod.string().min(2).max(50),
    lastName: zod.string().min(2).max(50).optional()
})

// router2.post("/signup", async function(req, res, next){
    
//         const body = req.body;
//         const validatedUser = userSchema.safeParse(req.body);
//         if(!validatedUser.success){
//             return res.status(400).json({error: validatedUser.error.errors});
//         }
//         console.log(validatedUser);
    

//     const ExistingUser = await User.findOne({username: body.username})

//     if(ExistingUser){
//         return res.status(400).json({error: "Username already exists"});
//     }

//     const dbUser = await User.create({
//         username: body.username,
//         password: await bcrypt.hash(body.password, 10),
//         firstName: body.firstName,
//         lastName: body.lastName
//     });
    
//     const token = jwt.sign({id: dbUser._id, username: dbUser.username}, jwtsecret, {expiresIn: '1h'});

//     res.status(201).json({message: "User created successfully", user: dbUser});

//     next();
// })

router2.post("/signup", async function(req, res){ // 'next' is removed
    const { success } = userSchema.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: "Invalid input"});
    }
    
    const { username, password, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ username });
    if(existingUser){
        return res.status(400).json({error: "Username already exists"});
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const dbUser = await User.create({
        username,
        password: hashedPassword,
        firstName,
        lastName
    });
    
    // Create the token with the user's ID
    const token = jwt.sign({ id: dbUser._id }, jwtsecret);

    // ✅ Send the token in the response and DON'T send the password
    res.status(201).json({
        message: "User created successfully",
        token: token 
    });
    // Do not call next() here
});

router2.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router2;