import React from "react";

function SideBar() {
  return (
    <>
      <div id="sidebar" className=" bg-black  h-5vh md:h-94vh md:w-20vw md:border-r-2 md:border-white ">
          <div className="flex h-full w-full justify-evenly items-center md:flex-col">
            
            <div className="flex gap-4 w-4/6  justify-center items-center">
            <button className="lg:justify-center  lg:items-center lg:gap-2 lg:w-full flex 
            hover:bg-white/30 hover:rounded-full hover:ease-in-out hover:duration-300
            ">
            <img src="home.png" alt="" className="w-5 h-5 md:w-10 md:h-10"/>
            <h1 className="md:text-white  md:text-2xl hidden md:flex font-popin font-bold">Home</h1>
            </button> 
            </div>


            <div className="flex gap-4 w-4/6  justify-center items-center">
            <button className="lg:justify-center lg:items-center lg:gap-2 lg:w-full flex
            hover:bg-white/30 hover:rounded-full hover:ease-in-out hover:duration-300
            ">
            <img src="search.png" alt="" className="w-5 h-5 md:w-10 md:h-10"/>
            <h1 className="md:text-white  md:text-2xl hidden md:flex font-popin font-bold">Explore</h1>
            </button> 
            </div>
            <div className="flex gap-4 w-4/6  justify-center items-center">
            <button className="lg:justify-center lg:items-center lg:gap-2 lg:w-full flex
            hover:bg-white/30 hover:rounded-full hover:ease-in-out hover:duration-300
            ">
            <img src="profile.png" alt="" className="w-5 h-5 md:w-10 md:h-10"/>
            <h1 className="md:text-white  md:text-2xl hidden md:flex font-popin font-bold">Profule</h1>
            </button> 
            </div>

          </div>
      </div>
    </>
  );
}

export default SideBar;
