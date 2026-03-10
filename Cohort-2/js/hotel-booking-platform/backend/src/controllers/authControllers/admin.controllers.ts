import type{Request,Response} from 'express';
// importing models
import {z} from 'zod'

const adminSignupSchema = z.object({
   name: z.string().min(2,"Name characters must be more than 2 characters"),
   email:z.string().email(),     //todo add regex for email
   password: z.string().min(8,"Password must be 8 characters"),
   phoneNumber: z.string(),   // todo validate with 10 numbers

})

// admin signup

export const adminSignup = async(req:Request,res:Response)=>{
    try {
        // const parsedData
    } catch (error) {
        
    }
}