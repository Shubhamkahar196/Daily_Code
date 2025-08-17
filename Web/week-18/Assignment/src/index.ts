import { PrismaClient } from "./generated/prisma";
import  express  from "express";
const app = express();
const Client = new PrismaClient();

app.get("/getUser",async (req,res)=>{
     try{
      const allUser = await Client.user.findMany();
      res.status(200).json({
          allUser
      })
     }catch(error){
       console.log(error);
       res.status(500).json({
          message: "Error fetching users"
       })
     }
})

app.