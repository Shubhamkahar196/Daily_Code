const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomShubham";
const app = express();

app.use(express.json());    

const users = [];

app.post("/signup",(req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)) {
        res.json({
            message: "You are already signup"
        })
    }
    users.push({
        username,
        password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users);
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }else{
            return false;
        }
    })

    if(foundUser){
        const token = jwt.sign({
            username: username
        },JWT_SECRET); // convert their username over to a jwt
    }
})