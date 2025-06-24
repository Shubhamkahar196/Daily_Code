const mongoose = require("mongoose");

const DB_NAME = require("../constrant.js");

const connectDB = async () => {

   try{
    if(!process.env.MONGODB_URI){
     throw new Error(`MONGODB_URI is not defined`);
    }

    if(!DB_NAME){
        throw new Error(`DB_NAME is not defined`);
    }
    const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log('successFull connected to db');
   }catch(error){
    console.log('error during connected to db');
    process.exit(1);
   }
}

module.exports = connectDB;