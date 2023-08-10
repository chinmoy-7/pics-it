import mongoose from "mongoose";


const ProfileSchema=new mongoose.Schema({
    user_id:{type:String,unique:true},
    username:{type:String},
    email:{type:String},
    photo:{type:[String],default:[]},
    friends:{type:[String],default:[]},
    isPending:{type:[String],default:[]}
})

const profile = mongoose.model("profile",ProfileSchema);

export default profile