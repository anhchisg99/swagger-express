import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = Schema({
    username:String,
    password:String,
    age:Number
})

export default mongoose.model('User',userSchema)