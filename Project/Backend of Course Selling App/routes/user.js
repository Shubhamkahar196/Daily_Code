const { Router} = require("express");
const { userModel} = require("../db");
const userRouter = Router();

    
userRouter.post("/signup", async function(req,res){
    // const { email, password, FirstName, LastName } = req.body; // adding zod validation
    const email = req.body.email;
    const password = req.body.password;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    //hash the password  tp plaintext pw is not stored in the DB by bcrypt
       
    // todo : put inside a try catch block
        await  userModel.create({
            email : email,
            password : password,
            FirstName : FirstName,
            LastName : LastName
           })
   
   

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
