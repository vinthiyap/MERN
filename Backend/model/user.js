import mongoose from 'mongoose';
const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    age:Number
})
const User=mongoose.model('user',userSchema)
export default User