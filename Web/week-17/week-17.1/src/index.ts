// importing postgres
import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());


const connectionString = "your connetion string"

const pgClient = new Client({
    connectionString,
});


 
pgClient.connect((err)=>{
    if(err){
        console.error("Connection error", err.stack);
    }else{
        console.log("connected");
    }
})


app.post("/signup", async (req,res)=>{

    try{
        const {username , email, password} = req.body;
        const response = await pgClient.query("INSERT INTO users (username, email,password) VALUES ($1,$2,$3) RETURNING *",
            [username,email,password]
        );
      
        // res.json(response.rows[0]);
        res.status(200).json({
            message: "Singup successfully"
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            message: "Error during signup"
        })
    }
})

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})











// async function main(){
//     await pgClient.connect();  

//     // fetch all users 
//     const response = await pgClient.query("SELECT * from users");
//     console.log(response.rows);

//     // update users

//     const updateQuery = {
//         text: "UPDATE users SET username =$1 WHERE id=$2 RETURNING *",
//         values:["shubham", 2],
//     };

//     const updateResponse = await pgClient.query(updateQuery);
//     console.log(updateResponse.rows);
// }

// main()
