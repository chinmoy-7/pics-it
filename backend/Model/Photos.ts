import mongoose from "mongoose";


const PhotoSchema=new mongoose.Schema({
    user_id:{type:String,ref:'Profile'},
    image_name:{type:String},
    time_added:{type:String},
    isDeleted:{type:Number},
    image_url:{type:String,default:""},
    user_name:{type:String}
})

const photos = mongoose.model("photos",PhotoSchema);

export default photos