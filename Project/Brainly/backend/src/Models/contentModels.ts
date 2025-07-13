import mongoose,{Schema,model, mongo} from "mongoose"

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type:String,
    userId:{type: mongoose.Types.ObjectId, ref:'User', required: true}, 
})

export const ContentModel = mongoose.model("Content", ContentSchema);