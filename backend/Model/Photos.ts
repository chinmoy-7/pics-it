import mongoose from "mongoose";


const PhotoSchema=new mongoose.Schema({
    user_id:{type:String,ref:'Profile'},
    image_name:{type:String},
    time_added:{type:String},
    isDeleted:{type:Number},
})

const photos = mongoose.model("photos",PhotoSchema);

export default photos