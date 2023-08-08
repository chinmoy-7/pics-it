import photos from "../Model/Photos"
export const getProfileImages=async(user:any)=>{
    const userPhotos = await photos.find({user_id:user.userId})
    return userPhotos
}