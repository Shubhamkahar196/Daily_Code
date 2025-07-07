import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { UserModel, ContentModel, LinkModel } from "./db";
import { JWT_PASSWORD } from "./config";

const app = express();

app.use(express.json());

app.post("/api/v1/signup", async (req: Request, res: Response) => {
  // Input validation using Zod
  const requiredBody = z.object({
    username: z.string().min(2, "Username is required"),
    password: z
      .string()
      .min(3)
      .max(13, "Password should be between 3 and 13 characters"),
  });

  // Safe parse (doesn't throw error if validation fails)
  const parseDataSuccess = requiredBody.safeParse(req.body);

  // If data is not correct
  if (!parseDataSuccess.success) {
    res.status(411).json({
      message: "Wrong credentials",
      error: parseDataSuccess.error,
    });
    return;
  }

  // Extract validated username and password
  const { username, password } = req.body;

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    await UserModel.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
    });
    return;
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Internal Server Error/",
    });
    return;
  }
});


app.post("/api/v1/signin", async(req:Request, res:Response)=>{

  try{

    const requiredBody = z.object({
      username:z.string().min(3).max(10),
      password: z.string().min(3).max(13)
    })


    const parseDataSuccess = requiredBody.safeParse(req.body);
    
    if(!parseDataSuccess.success){
      res.status(403).json({
        message: "Incorrect format",
        error: parseDataSuccess.error
      })
      return
    }

    const {username, password} = req.body;

    const existingUser = await UserModel.findOne({
      username: username,
      // password: password
    })

    if(!existingUser || !existingUser.password){
      res.status(403).json({
        message: "Incorrect credentials",
      })
      return
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);
     
    if(!passwordMatch){
      res.status(403).json({
        message: "Password is incorrect",
      })
      return
    }

    const token = jwt.sign({userId: existingUser._id}, JWT_PASSWORD,{expiresIn: '1h'})
    res.status(200).json({
      message: "Signed in successfully",
      token
    })
  }catch(e){
    console.error(e);
    res.status(500).json({
      message: "Internal server problem",
    })
    return
  }
})


app.post("/api/v1/content", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
