const express = require("express");
const app = express();

app.use(express.json());

app.post("/signup",(req,res)=>{

});

app.post("/signin",(req,res)=>{

});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})