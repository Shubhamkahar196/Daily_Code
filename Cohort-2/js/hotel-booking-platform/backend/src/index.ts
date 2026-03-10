import express , {Request,Response} from 'express';
const app = express();

const PORT = process.env.PORT || 8000


app.get("/",(req:Request,res:Response)=>{
    res.json("hiii");
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})