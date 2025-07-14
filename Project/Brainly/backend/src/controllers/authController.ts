import express, { Request, Response } from "express";
import { UserModel } from "../Models/userModels";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signupSchema = z.object({
  username: z.string().min(3, "username is required").max(10),
  email: z.string().email(),
  password: z.string().min(4, "Password is required").max(13),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4, "Password is required").max(13),
});

export const signup = async (req: Request, res: Response) => {
  try {
    const parseDataSuccess = signupSchema.safeParse(req.body);
    if (!parseDataSuccess.success) {
       res.status(400).json({
        message: "Invalid request data",
        error: parseDataSuccess.error,
      });
      return
    }

    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({ username, email, password: hashedPassword });
     res.status(201).json({ message: "User successfully signed up" });
     return
  } catch (error) {
    console.log(error);
     res.status(500).json({ message: "Internal server error" });
     return
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const parseDataSuccess = loginSchema.safeParse(req.body);
    if (!parseDataSuccess.success) {
       res.status(400).json({
        message: "Invalid request data",
        error: parseDataSuccess.error,
      });
      return
    }

    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "Invalid email or password" });
      return
    }

    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
       res.status(401).json({ message: "Invalid email or password" });
       return
    }

    if (!process.env.SECRET_KEY) {
       res.status(500).json({ message: "Internal server error" });
       return
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
     res.status(200).json({
      message: "User logged in successfully",
      token,
      userId: user._id,
    });
    return
  } catch (error) {
    console.log(error);
   res.status(500).json({ message: "Internal server error" });
   return
  }
};

