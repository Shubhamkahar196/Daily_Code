import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";
//extend the request object to include the user property
declare global{
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const JWT_SECRET_Key = process.env.JWT_SECRET;

if (!JWT_SECRET_Key) {
  throw new Error("JWT_SECRET is not defined");
}


export const authenticateToken = (req:Request, res: Response, next: NextFunction) =>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null){
        return res.status(401).json({error: 'Authorization token not provided.'});
    }

    jwt.verify(token,JWT_SECRET_Key,(err,user)=>{
        if(err){
            return res.status(403).json({
                error: "Invalid or expired token"
            });
        }
        req.user = user;
        next();
    })
}

