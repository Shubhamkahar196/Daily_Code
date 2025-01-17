const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();




const jwt = require("jsonwebtoken");
const  { JWT_USER_PASSWORD }= require("../config");
const bcrypt = require("bcrypt");
const z = require("zod");

userRouter.post("/signup", async function (req, res) {

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

    if (!parseDataSuccess.success) {
        return res.json({
            message: "Incorrect Format",
            error: parseDataSuccess.error
        })
    }


    // Extract validated email, password, firstName, and lastName from the request body
    const { email, password, firstName, lastName } = req.body;

    // Hash the user's password using bcrypt with a salt rounds of 5
    const hashedPassword = await bcrypt.hash(password, 5);



    // creating a new user in the database
    try {
        // Create a new user entry with the provided email,hashed password, firstName, last name


        await userModel.create({
            email : email,
            password: hashedPassword,
            firstName: firstName,
            lastName :  lastName,
        });
    } catch (e) {
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




userRouter.post("/signin", async function (req, res) {

    try {


        //define the schema for validating the request body data using zod
        const requireBody = z.object({

            //email must be valid email format

            email: z.string().email(),
            //password mut be at least 5 character
            password: z.string().min(6)
        });

        //parse and validate the incoming requrest body data

        const parseDataWithSuccess = requireBody.safeParse(req.body);

        // if  validation fails, return a error with the validation error details

        if (!parseDataWithSuccess.success) {
            return res.status(400).json({
                message: "Incorrect Data format",
                error: parseDataWithSuccess.error,
            });
        }

        //extract validated email and password from the body

        const { email, password } = req.body;
        const user = await userModel.findOne({
            email: email,
        });

        // if the user is not found , return a error indicating incorrect credentials
        if (!user) {
            return res.status(403).json({
                message: "Incorrect Credentials !"
            });
        }

        //compare the provided password with the stored hashed password using bcrypt

        const passswordMatch = await bcrypt.compare(password, user.password);

        //if the password matches, create a jwt token and send it to the client
        if (passswordMatch) {
            // create a jwt token using the jwt.sign() method

            const token = jwt.sign({
                id: user._id
            }, JWT_USER_PASSWORD);

            //send the generated token back to client
            res.json({
                token: token,
            });
        } else {
            // if the password does not match , return a error indicating the invalid credetials
            res.status(403).json({
                //error message for failed password comparison
                message: "invalid credentials!"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }


});

userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "user purchase endpoint"
    })
});




module.exports = {
    userRouter: userRouter
}
