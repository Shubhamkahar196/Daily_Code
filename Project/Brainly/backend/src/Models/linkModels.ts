import mongoose,{model,Schema} from "mongoose";


const LinkSchema = new Schema({
    hash: String,
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true}
})

export const LinkModel = model('Link', LinkSchema);