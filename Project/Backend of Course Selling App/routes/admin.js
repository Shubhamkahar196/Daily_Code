const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "1234@@";
const bcrypt = require("bcrypt");
const z = require("zod");



adminRouter.post("/singup", async function (req, res) {

    //input validation using zod

    const requireBody = z.object({
        email: z.string().email().min(5),
        password: z.string().min(4).max(10),
        firstName: z.string().min(3).max(10),
        lastName: z.string().min(3).max(10)
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

    //extract validated email, password , firstName and lastName from the requres ho  

    const { email, password, firstName, lastName } = req.body;

    //hash the admin password using bcrypt with  a salt rounds of 5
    const hashedPassword = await bcrypt.hash(password, 5);

    //creating a admin in the database
    try {
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        });
    } catch (e) {
        // If there is an error during user creation, return a error message
        return res.status(400).json({
            // Provide a message indicating signup failure
            message: "You are already signup"
        })

    }

    // Send a success response back to client indicating successfully singup

    res.json({
        message: "admin signup succesfully"
    })
})

adminRouter.post("/signin", async function (req, res) {

    // Validate the request body data using zod schema(email,password must be valid)
    const requireBody = z.object({
        email: z.string().email(),
        password: z.string().min(5),
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error
        })
    }

    // Get the email and password from the request body
    const { email, password } = req.body;
    // Find the admin with the given email

    const admin = await adminModel.findOne({
        email: email,
    });

    // If the admin is not found, send an error message to the client

    if (!admin) {
        return res.status(403).json({
            message: "Invalid credentials",
        })
    }

    // Compare the password with the hashed password using the bcrypt.compare() method
    const passswordMatch = await bcrypt.compare(password, admin.password);


    // If password matches, generate a jwt token and return it

    if (passswordMatch) {
        // Create a jwt token with the admin's id and the secret key
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);
    } else {
        // If the password does not match, send an error message to the client
        res.status(403).json({
            message: "Invalid credentials!"
        });
    }

    res.json({
        message: "admin signin"
    })
})

adminRouter.post("/", function (req, res) {
    res.json({
        message: "admin create course"
    })
})


adminRouter.put("/bulk", function (req, res) {
    res.json({
        message: "admin update course"
    })
})

adminRouter.get("/course", function (req, res) {
    res.json({
        message: "admin get all courses"
    })
})

module.exports = {
    adminRouter: adminRouter
}