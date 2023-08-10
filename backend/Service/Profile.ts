import profile from "../Model/Profile"


export const getProfile=async(user:any)=>{
    const userProfile = await profile.findOne({user_id:user.userId})
    return userProfile
}

export const getProfileUsername=async(user:any)=>{
    const regexPattern = new RegExp(user, 'i');
    let userProfile
    if(user!=="")
    userProfile=await profile.find({username:regexPattern}).limit(10)
    console.log(userProfile)
    return userProfile

}