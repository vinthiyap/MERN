import mongoose from 'mongoose';
const userSchema= new mongoose.Schema({
    name:String,
    age:Number
})
const User=mongoose.model('user',userSchema)
export default User