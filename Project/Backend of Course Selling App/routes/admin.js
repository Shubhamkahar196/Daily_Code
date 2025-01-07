const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");



adminRouter.post("/singup", function(req,res){
    res.json({
        message: "admin signup"
    })
})

adminRouter.post("/signin",function(req,res){
    res.json({
        message: "admin signin"
    })
})

adminRouter.post("/course",function(req,res){
    res.json({
        message: "admin create course"
    })
})


adminRouter.put("/course",function(req,res){
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