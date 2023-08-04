import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

const authContext=createContext()


const AuthContextProvider = ({children})=>{
    //states
    const [cred,setCred]=useState({email:"",username:"",password:""})

    //Toast Notification Function
    const notify=(type,msg)=>{
        if(type=="server"){
            toast.warning("Since it is a free server, initially it might take 3-4 min",{
                position:toast.POSITION.TOP_CENTER,
                toastId:3,
                autoClose:4000
            })
            return
        }
        if(type=="success"){
            toast.success(msg,{
                position: toast.POSITION.TOP_RIGHT,
                toastId:2,
                autoClose:2000
            })
            return
        }
        if(type="error"){
            toast.error(msg,{
                position: toast.POSITION.TOP_RIGHT,
                toastId:1,
                autoClose:2000
            })
            return
        }   
    }

    //Login handler
    const loginHandler=async ()=>{
        notify("server")
        const login=await axios.post("http://localhost:4000/login",cred)
        if(login.data.status==404){
            notify("error","No user found")
            return
        }
        if(login.data.status==200){
            notify("success","Login Successfull")
        }
    }
    return(
        <authContext.Provider value={{cred,setCred,loginHandler}} >
            {children}
        </authContext.Provider>
    )
}

export {authContext,AuthContextProvider}