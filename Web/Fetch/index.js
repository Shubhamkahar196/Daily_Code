const express = require("express");
const app = express();

app.get("/sum",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a+b
    });
})

app.get("/sub",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a-b
    })
})

app.get("/mul",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans : a*b
    })
})

app.get("/div",(req,res)=>{
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans : a/b
    })
})



 app.listen(3000,()=>{
    console.log("Server is running on port 3000");
 });