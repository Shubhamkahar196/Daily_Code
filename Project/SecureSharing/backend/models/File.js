const mongoose = require("mongoose");

const FileSchema = new Schema(
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
        

    }
)