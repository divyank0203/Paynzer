import { Router } from "express";
import router2 from "./user.js";

const router = Router();

router.use("/user", router2);

export default router;