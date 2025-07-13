import mongoose,{model,Schema} from "mongoose"


const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: {type:String, required: true, unique: true},
  password: { type: String, required: true }
})

export const UserModel = model("User", UserSchema);