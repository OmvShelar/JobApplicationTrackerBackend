
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema= new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.pre('save', async function (next){
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8);
    }
    next();
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

console.log("Helloooooo");

module.exports = mongoose.model("User", userSchema);
