
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

interface AuthRequest extends Request {
  userId?: string;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const header = req.headers["authorization"];
    if (!header || !process.env.SECRET_KEY) {
      return res.status(403).json({ message: "You are not logged in" });
    }

    const decoded = jwt.verify(header, process.env.SECRET_KEY) as JwtPayload;
    if (typeof decoded === 'string') {
      return res.status(403).json({ message: "You are not logged in" });
    }

    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: "You are not logged in" });
  }
}

