const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "shubham12";
const mongoose = require("mongoose");


app.use(express());


app.post("/user/signup", function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    res.status(200).json({
        message: "You are successfully signup"
    })
});

app.post("/user/signin",function(req,res){
         const email = req.params.email;
         const password = req.params.password;

         res.status(200).json({
            message: "You are logged in"
         })
});


app.post("/user/purchases",function(req,res){

});

app.post("/courses/purchase",function(req,res){

});

app.get("/courses", function(req,res){

});




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})