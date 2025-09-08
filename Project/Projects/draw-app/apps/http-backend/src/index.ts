import express from 'express';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@repo/backend-common/config';
import { middleware } from './middleware';
import {CreateUserSchema ,signinSchema,CreateRoomSchema} from '@repo/common/types'
const app = express();


app.post("/signup",async(req,res)=>{

    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }
// db call
res.json({
    userId:123
})
    
})
app.post("/sigin",async(req,res)=>{
  
     const data = signinSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }

    const userId = 1;
   const token =  jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        token
    })
  
})

app.post("/room",middleware,(req,res)=>{

     const data = CreateRoomSchema.safeParse(req.body);
    if(!data.success){
        return res.json({
            message: "Incorrect inputs"
        })
    }

    // db call

    res.json({
        roomId:123
    })

})
app.listen(3001,()=>{
    console.log("Server is running on 3001 og http-backend");
})