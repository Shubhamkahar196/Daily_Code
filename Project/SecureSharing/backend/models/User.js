const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
       email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [/.+@.+\..+/, 'Please use a valid email address'], // Basic email regex
  },
        password:{
            type: String,
            required: [true, 'Please add a password'],
            minLength: [6, "Password must be at least 6 characters long"],
        },
        createdAt:{
            type: Date,
            default: Date.now,
        },
  }
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;