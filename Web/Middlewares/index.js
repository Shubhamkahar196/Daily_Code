const express = require('express');

const app = express();

// simple function
function isOldEnough(age){
    if(age >=14){
        return true;
    }else{
        return false;
    }
}

//middleware
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg :"sorry you are not of age yet",
        });
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride1",(req,res)=>{
    if(isOldEnough(req.query.age)){
        res.json({
            msg : "You have successfully riden the ride 1"
        })
    }else{
        res.status(411).json({
            msg : "Sorry you are not of age yet"
        })
    }
   
})

// app.get("/ride2",isOldEnoughMiddleware,(req,res)=>{
//     res.json({
//         msg :"You have successfully riden the ride 2",
//     });
// })

app.get("/ride2",(req,res)=>{
    res.json({
        msg :"You have successfully riden the ride 2",
    });
})

app.listen(3000,()=>{
    console.log("Server is running on port at 3000");
})