const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomShubham";
const cors = require("cors")
const app = express();

app.use(express.json());   
app.use(cors());
// app.use(express.static("./public")) 



const users = [];

app.get("/", function(req, res) {
    res.sendFile(__dirname + "./public/index.html");
});

app.post("/signup",(req,res)=>{
    const username  = req.body.username;
    const password = req.body.password;

    if(users.find(u => u.username === username)) {
        res.json({
            message: "You are already signup"
        })
    }
    users.push({
        username,
        password
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users);
})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true;
        }else{
            return false;
        }
    })
    if(foundUser){
        const token = jwt.sign({
         username: username
        },JWT_SECRET); // convert their username over to a jwt
        foundUser.token = token;
        res.send({
            token: token
        })
        console.log(users);
    }else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

function auth(req,res,next){
    const token = req.headers.authorization;

    if(token){
        jwt.verify(token,JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).send({
                    message: "Unauthorized"
                })
            }else{
                req.user = decoded;
                next();
            }
        })
    }else{
        res.status(401).send({
            message:"Unauthorized"
        })
    }
}

app.get("/me",auth,(req,res)=>{
    const user = req.user;

    res.send({
        username: user.username
    })
})

app.listen(3000, ()=>{
    console.log("Serve is running on port 3000");
})