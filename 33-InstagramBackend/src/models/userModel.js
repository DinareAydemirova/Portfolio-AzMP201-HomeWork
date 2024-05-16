const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
	username: String,
	full_name: String,
    email:String,
    password:String,
    phone_number:String,
    birthdate:Date,
    gender:Boolean,
    profile_picture:String,
    bio:String,
    followers:Number,
    following:Number,
    
})

module.exports = mongoose.model("User", UserSchema)