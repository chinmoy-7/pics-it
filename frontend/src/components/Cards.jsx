import React, { useContext,useEffect, useState } from "react";
import { authContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Cards() {
    const auth = useContext(authContext)
    const navigate = useNavigate();

    const [post,setPost]=useState({})

    const getFeed = async () => {
    const headers = {
      token: window.sessionStorage.getItem("token"),
    };

    const posts = await axios.post(
      "http://localhost:4000/get-followed-image",
      null,
      { headers: headers }
    );
    if (posts.data.status == 500) {
      auth.notify("error", "Please Login Again");
      setTimeout(() => {
        navigate("/");
        return
      }, 2000);
    }
    setPost(posts.data.response)
    console.log(post,">")
    auth.setLoading(false)

  };

  useEffect(() => {
    getFeed();
  }, []);

  const postCards=post?.modifedPhotos?.map(item=>{
    return(
      <div className="bg-black h-80vh md:h-[100%] lg:w-[40%] border-b border-b-gray-50/20">
        <div id="card-top" className="h-[10%]  flex  justify-between items-center text-xl text-white">
          <div className="flex gap pl-4 ">
          <img src="home.png" alt="" className="rounded-full"/>
          <h1 className="pl-3">{item.user_name}</h1>
          </div>
          <div className="pr-4" >
          <h1 >...</h1>
          </div>
        </div>
        <div id="card-center" className="h-[70%] ">
          <img src={item.image_url} alt="" className="w-full h-full"/>
        </div>
        <div id="card-bottom" className="h-[20%]  flex justify-start items-center pl-4">
          <h1 className="text-2xl text-white">c_dehingia</h1>
        </div>
      </div>
    )
  })
  
  return (
    <>
    {postCards}
      
    </>
  );
}

export default Cards;
