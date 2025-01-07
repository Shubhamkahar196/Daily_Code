const { Router} = require("express");
     
const userRouter = Router();
    
userRouter.post("/signup", function(req,res){
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;
    
        res.status(200).json({
            message: "You are successfully signup"
        })
    });
    
userRouter.post("/signin",function(req,res){
             const email = req.params.email;
             const password = req.params.password;
    
             res.status(200).json({
                message: "You are logged in"
             })
    });
    
userRouter.get("/purchases",function(req,res){
        res.json({
            message: "user purchase endpoint"
        })
    });




module.exports = {
    userRouter: userRouter
}
