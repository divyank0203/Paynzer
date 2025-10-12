import { jwt } from "jsonwebtoken";
// import User from "../db.js";
const jwtsecret = process.env.JWT_SECRET;

const authMiddleware = async function(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        return res.status(401).json({error: "Unauthorized"});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, jwtsecret);
        req.userId = decoded.userId;
        next();

    }
    catch(error){
        return res.status(401).json({error: "Invalid token"});
    }

}

export default authMiddleware;