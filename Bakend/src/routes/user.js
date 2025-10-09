import express from "express";
import { Router } from "express";
import zod from "zod";
import User from "../db";

const router2 = Router();

const userSchema = zod.object({
    username: zod.string().min(4),
    password: zod.string().min(8),
    firstName: zod.string().min(2).max(50),
    lastName: zod.string().min(2).max(50).optional()
})

router2.post("/signup", async function(req, res, next){
    try{
        const validatedUser = userSchema.safeParse(req.body);
        if(!validatedUser.success){
            return res.status(400).json({error: validatedUser.error.errors});
        }
        console.log(validatedUser);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }

    const user = await User.create(req.body);
    res.status(201).json({message: "User created successfully", user});

    next();
})

router2.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router2;