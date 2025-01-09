const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");



adminRouter.post("/singup", function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    res.json({
        message: "admin signup"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message: "admin signin"
    })
})

adminRouter.post("/",function(req,res){
    res.json({
        message: "admin create course"
    })
})


adminRouter.put("/bulk",function(req,res){
    res.json({
        message: "admin update course"
    })
})

adminRouter.get("/course",function(req,res){
    res.json({
        message: "admin get all courses"
    })
})

module.exports ={
    adminRouter: adminRouter
}