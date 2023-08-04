import React, { useContext } from "react"; 
import { Link } from "react-router-dom";
import { authContext } from "../Context/AuthContext";
import { ToastContainer } from "react-toastify";

function Login() {
  const auth = useContext(authContext)
  return (
    <>
    <ToastContainer/>
      <div className="h-screen w-full flex justify-center">
        <div className=" w-1/2 hidden lg:flex justify-end items-center  ">
          <div className=" w-4/6 ">
            <img className="w-full h-full" src="login.png" alt="" />
          </div>
        </div>
        
        <div className="w-full flex justify-center items-center lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <div className=" h-5/6 lg:h-4/6 lg:w-3/6 w-5/6  flex flex-col gap-4">
            <form
              action=""
              className="border border-gray-400 h-5/6 w-full flex flex-col justify-around items-center rounded-md"
            >
              <div className="h-1/6 ">
              <h1 className="text-center font-bold text-5xl  font-['cursive']">Pics-It</h1>
              </div>
              <input
                type="email"
                name="email"
                class="px-3 py-2  bg-gray-100 w-5/6 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                placeholder="Username"
                onChange={(e)=>auth.setCred({...auth.cred,username:e.target.value})}
              />
              <input
                type="password"
                name="password"
                class="px-3 py-2  bg-gray-100 w-5/6 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                placeholder="Password"
                onChange={(e)=>auth.setCred({...auth.cred,password:e.target.value})}
              />
              
            <button type="button" className="rounded-full bg-primaryBlue w-5/6 h-10 font-semibold text-sm text-white" onClick={auth.loginHandler}>Submit</button>
              <Link to="/" className=" cursor-pointer ">Forgot Password?</Link>
            </form>
            <div className="bg-white border h-2/6 border-gray-400 flex justify-center items-center rounded-md">
              <h1 className="text-2xl">Dont have an Account? <Link className="text-blue-400" to="/">Signup</Link></h1>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Login;
