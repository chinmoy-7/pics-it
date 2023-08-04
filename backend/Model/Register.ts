import mongoose from "mongoose";


const SignupSchema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
})

const signup = mongoose.model("signup",SignupSchema);

export default signup