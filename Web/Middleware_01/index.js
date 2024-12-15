const express = require("express");
const app = express();

let requestCount = 0;

app.get("/sum",(req,res)=>{
       requestCount = requestCount + 1;
       console.log("Total number of requests = "+ requestCount);
       console.log(`Total number of requests =  ${requestCount}`);
    const a =  parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans : a +b
    });
})

app.get("/mul",(req,res)=>{
    requestCount = requestCount + 1;
    console.log("Total number of requests = "+ requestCount);
    console.log(`Total number of requests =  ${requestCount}`);
 const a =  parseInt(req.query.a);
 const b = parseInt(req.query.b);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})