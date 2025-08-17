import {Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { signupSchema, loginSchema } from '../validation/userValidation';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const router = Router();
const Client = new PrismaClient();
const JWT_SECRET_Key = process.env.JWT_SECRET;

router.post("/signup", async(req,res)=>{
    try{
        const {email,password} = signupSchema.parse(req.body);
        const existingUser = await Client.user.findUnique({ where: {email}});
        if(!existingUser){
            return res.status(409).json({
                error: "User with this email already exists"
            })
        }

        // hashing password
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await Client.user.create({
            data: { email, password: hashedPassword},
        })

        res.status(201).json({
            message: "User created Successfully",
            user: {id: user.id, email: user.email}
        })
    }catch(error){
        res.status(400).json({
            error: "Invalid input data"
        })
    }
});