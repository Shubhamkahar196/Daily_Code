const { Router} = require("express");
const { userModel} = require("../db");
const userRouter = Router();




const jwt = require("jsonwebtoken");
const JWT_SECRET = "aashvba";
const bcrypt = require("bcrypt");
const z = require("zod");

userRouter.post("/signup", async function(req,res){
    
    // input validation using zod

    const requireBody = z.object({
        email: z.string().min(3).max(50).email(),
        password: z.string().min(3).max(50),
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30),
    });

       // Parse the request body using the requireBody.safeParse() method to validate the data format
    // "safe" parsing (doesn't throw error if validation fails)
      
    const parseDataSuccess = requireBody.safeParse(req.body);

    //if data is not correct then yeh response return krdo

    if(!parseDataSuccess.success){
        return res.json({
            message: "Incorrect Format",
            error: parseDataSuccess.error
        })
    }

    
    // Extract validated email, password, firstName, and lastName from the request body
    const { email,password,FirstName,LastName} = req.body;

      // Hash the user's password using bcrypt with a salt rounds of 5
       const hashedPassword = await bcrypt.hash(password,5);



     // creating a new user in the database
     try {
        // Create a new user entry with the provided email,hashed password, firstName, last name

   
        await  userModel.create({
            email,
            password : hashedPassword,
            FirstName,
            LastName,
           });
     }catch(e){
         // If there is an error during user creation, return a error message
         return res.status(400).json({
            // Provide a message indicating signup failure
            message: "You are already signup",
        });
     }
      
     // send a success response back to client indication successfully signup

        res.status(200).json({
            message: "You are successfully signup"
        })
    });



    
userRouter.post("/signin", async function(req,res){
             const { email , password } = req.body;
             res.json({
                message : "You are logged in "
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
