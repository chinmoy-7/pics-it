import profile from "../Model/Profile"


export const getProfile=async(user:any)=>{
    const userProfile = await profile.findOne({user_id:user.userId})
    return userProfile
}