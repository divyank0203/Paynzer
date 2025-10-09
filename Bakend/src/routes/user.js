import express from "express";
import { Router } from "express";

const router2 = Router();

router2.get("/", (req, res) => {
    res.send("Hello World!");
});

export default router2;