import mongoose from 'mongoose';

//scheam

const productSchema = new mongoose.Schema({
 description:{
    type: String,
    required:true,
 },
 name:{
    type: String,
    required:true,
 },
 productImage:{
    
 }
},{timestamps: true})

export const Product = mongoose.model("Product", productSchema);