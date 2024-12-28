const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomShubhamLove"; 
const app = express();

app.use(express.json());

const users = [];



app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (users.find(u => u.username === username)) {
        res.json({
            message: "You are alreadu signup"
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

});

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password =req.body.password;

    const foundUser = users.find(function(u){
        if(u.username == username && u.password == password ){
            return true;
        }else{
            return false;
        }
    })

    if(foundUser){
        const token = jwt.sign({
            username: username
        },JWT_SECRET); //convert their username over to a jwt
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
        jwt.verify(token, JWT_SECRET,(err,decoded) =>{
            if(err){
                res.status(401).send({
                    message: "unauthorized"
                })
            }else{
                req.user = decoded;
                next();
            }
        })
    }else{
        res.status(401).send({
            message: "sjbfjsjb"
        })
    }
}


// app.get("/me", function(req,res){
//     const token = req.headers.token;
//     const decodeInformation = jwt.verify(token, JWT_SECRET); //{username:"shubhamkahar134@gmail.com"}
//     const username = decodeInformation.username;
//     const user = users.find(u => u.token=== token);

//     if(user){
//         res.send({
//             username: user.username
//         })
//     }else{
//         res.status(401).send({
//             message: "Unauthorized"
//         })
//     }
// })

app.get("/me", auth,(req,res)=>{
    const user = req.user;

    res.send({
        username: user.username
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})