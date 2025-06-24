const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const FileSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId, //Reference to the user model
            required: true,
            ref: 'User',
        },
        originalFilename: {
            type: String,
            required: true,
        },
        storedFileName:{
            type:String,
            required: true,
            unique:true,
        },
        fileType: {   // Mime type (e.g., 'image/jpeg', 'video/mp4')
            type:String,
            required: true,
        },
        fileSize:{
            type: Number,
            required: true,
        },
        shareLink:{
            type:String,
            required: true,
            unique: true,
            index: true,  
        },
        isPasswordProtect:{
            type:Boolean,
            default:false,
        },
        filePassword:{
            type:String,
            required: function() {
                return this.isPasswordProtect;
            }
        },
        expirationDate:{
            type:Date,
            default: null,
        },
        viewLimit:{
            type:Number,
            default: null,
        },
        currentView:{
            type:Number,
            default: 0,
        },
        createdAt:{
            type:Date,
            default: Date.now,
        }

    }
)

//method to hash file password if set
FileSchema.pre("save", async function (next){
    if(this.isModified('filePassword') && this.filePassword){
       
     this.filePassword = await bcrypt.hash(this.filePassword,10)
         
    }
    next();
})

 FileSchema.methods.isPasswordCorrect = async function(password){

     return await bcrypt.compare(password,this.filePassword);
 }

 const File = mongoose.model('File', FileSchema);

 module.exports = File;