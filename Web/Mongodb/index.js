const express = require('express');
const { UserModel, TodoModel} = require("./db");

const app = express();

app.post("/signup",(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    UserModel.insertMany({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are logged in"
    })
});

app.post("signin", (req,res)=>{

});

app.post("/todo",(req,res)=>{

});

app.get("/todos",(req,res)=>{

});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})