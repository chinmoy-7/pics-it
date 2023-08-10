import profile from "../Model/Profile"

export const followOne=async(req:any,res:any)=>{
    try{
        const {friendUserId}=req.body
        const getUser:any=await profile.findOne({user_id:friendUserId})
        if(getUser){
            if(!getUser["isPending"].includes(req.user.userId)){
        getUser["isPending"].push(req.user.userId)
            }else{
                return res.send({status:400,message:"Already sent"})
            }
        }
        const updateList=await profile.updateOne({user_id:friendUserId},getUser)
        return res.send({
            status:200,
            message:"Req sent"
        })

    }catch(error:any){
        throw new Error(error)
    }
}


export const acceptFollow=async(req:any,res:any)=>{
    try {
        const {acceptId}=req.body
        const user:any= await profile.findOne({user_id:req.user.userId})
        let index:any=user["isPending"].indexOf(acceptId)
        user["isPending"].splice(index,1)

        if(!user["friends"].includes(acceptId))
        user["friends"].push(acceptId)
        else
        return res.send({status:200,message:"Already Accepted"})
    
        await profile.updateOne({user_id:req.user.userId},user)
        return res.send({
            status:200,
            message:"Accepted"
        })

    } catch (error:any) {
        throw new Error(error)
    }
}