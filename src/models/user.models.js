 import mongoose from "mongoose";

 const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password : {
        type : String,
        required: true,
    },
    address : {
        type: String,
        required: false,
    }
}, {
    timestamps : true
})

export default mongoose.model('user', userSchema);