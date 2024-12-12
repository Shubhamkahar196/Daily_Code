const express = require("express");
const app = express();

//simple  // http://localhost:3000/sum?a=5&b=8
// app.get("/sum",(req,res)=>{
//     const a = pasreInt(req.query.a);
//     const b = pasreInt(req.query.b);

//     res.json({
//         ans: a+b
//     });
// })

//making it dynamic   

//http://localhost:3000/sum/10/20

app.get("/sum/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a+b
    });
})

app.get("/sub/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a-b
    })
})

app.get("/mul/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans : a*b
    })
})

app.get("/div/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans : a/b
    })
})



 app.listen(3000,()=>{
    console.log("Server is running on port 3000");
 });