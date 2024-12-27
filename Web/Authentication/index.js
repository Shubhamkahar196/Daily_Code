const express = require("express");
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
        const token = generateToken();
        foundUser.token = token;
        res.json({
             token
        })
    }else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
});


app.get("/me", function(req,res){
    const token = req.headers.token;
    const user = users.find(u => u.token=== token);

    if(user){
        res.send({
            username: user.username
        })
    }else{
        res.status(401).send({
            message: "Invalid token"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})