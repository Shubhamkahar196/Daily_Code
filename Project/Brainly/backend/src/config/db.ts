import mongoose  from "mongoose";
import { DB_NAME } from "../constrant";


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("database connection successfully connected");
    }catch(error){
        console.log("Mongodb connection error",error);
        process.exit(1)
    }
}

export default connectDB