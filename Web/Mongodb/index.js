const express = require('express');
const { UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "shubham@123";

mongoose.connect("mongodb+srv://yt727883:wTg5f7j1Ju3y0iQN@cluster0.1tsxm.mongodb.net/Todo-App-database");
const app = express();
app.use(express.json());

app.post("/signup", async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await  UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
});

app.post("signin",async function(req,res){
   const email = req.body.email;
   const password = req.body.password;

   const user = UserModel.findOne({
    email:email,
    password: password
   })
    
   console.log(user);

   if(user){
    const token = jwt.sign({
    id: user._id
    });
    res.json({
        token: token
    });
   }else{
    res.status(403).json({
        message: "Incorrect Credentials"
    })
   }
});

app.post("/todo",(req,res)=>{

});

app.get("/todos",(req,res)=>{

});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})