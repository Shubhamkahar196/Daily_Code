const express = require('express');
const cors = require('cors');  // we use cors because when we send request
//  to fronted and backend the web broswer bloced by cros policy 
const app = express();

app.use(express.json());
app.use(cors());


app.post("/sum",(req,res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans : a + b
    })
})

app.listen(3000,()=>{
    console.log("Server is running ");
})