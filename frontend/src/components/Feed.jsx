import axios from "axios";
import React, { useContext,  useState } from "react";
import { authContext } from "../Context/AuthContext";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import Cards from "./Cards";
import SideBar from "./SideBar";
function Feed() {
  const auth = useContext(authContext);
  return (
    <>
      <ToastContainer />
      <div className="min-h-screen  flex flex-col ">
        <div
          id="header"
          className="h-6vh  bg-black border-b-2 border-black"
        >
          <h1 className="text-white font-dancing text-2xl pl-4">Pics-it</h1>
        </div>
        <div className="flex flex-col-reverse    md:flex-row ">
        <SideBar/>
          <div className=" min-h-89vh bg-black md:w-80vw lg:w-80vw">
            {auth.loading == true ? (
              <div className="flex justify-center items-center ">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
              <div className="bg-black/20 h-89vh overflow-auto md:flex md:flex-col  md:justify-start md:items-center">
                <Cards/>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
