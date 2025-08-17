import {Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { signupSchema, loginSchema } from '../validation/userValidation';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

const router = Router();
const Client = new PrismaClient();
const JWT_SECRET_Key = process.env.JWT_SECRET;
if (!JWT_SECRET_Key) {
  throw new Error("JWT_SECRET is not defined");
}


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

// login route

router.post("/login",async(req,res)=>{
    try{
        const {email,password} = loginSchema.parse(req.body);

        // finding user through email
        const user = await Client.user.findUnique({where: {email}})
        // checking user exist or not
        if(!user){
            return res.status(404).json({
                error: "User not found"
            })
        }
        
        // if user find then match the password of user

        const isPassword = await bcrypt.compare(password,user.password);
        // if password not matched
        if(!isPassword){
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        // checking token
        const token = jwt.sign({userId: user.id}, JWT_SECRET_Key, {expiresIn: '1h'})

        

    }catch(error){
        res.status(400).json({ error: 'Invalid input data.' });
    }
})