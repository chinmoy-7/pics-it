import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Context/AuthContext";
import axios from "axios";

function Search() {
  const auth = useContext(authContext);
  const [people, setPeople] = useState([]);
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState({ username: "" });
  const headers = {
    token: window.sessionStorage.getItem("token"),
  };
  const search = async (e) => {
    const result = await axios.post("http://localhost:4000/search", username, {
      headers: headers,
    });
    setPeople(result);

    // console.log(result)
  };
  useEffect(() => {
    if (username["username"] == "") {
      setStatus(true);
    } else setStatus(false);
  }, [username]);
  return (
    <div className="bg-black  h-80vh md:h-[100%] lg:w-[40%] border-b border-b-gray-50/20">
      <div className="flex mt-5 h-full  items-center gap-20 flex-col ">
        <input
          type="text"
          onKeyUp={(e) => {
            setUsername({ username: e.target.value });
            search(e);
          }}
          className="bg-white/20 w-[80%] min-h-[50px]  pl-4 rounded-lg"
          placeholder="Username"
        />
        {!status &&
          people?.data?.result?.map((item) => {
            return (
              <div className="h-[100px] w-[80%] flex justify-around bg-gray-800 gap-10 items-center border-4 border-gray-500 rounded-lg mb-2 p-3">

                <img
                  src="profile.png"
                  alt=""
                  className="w-15 h-15 border-2 ml-5 border-white rounded-full overflow-hidden"
                />
                <button>
                <p className="text-white font-bold  text-2xl">
                  {item.username}
                </p>
                </button>
                <button className="text-white font-bold  text-xl border-2x">
                    Follow
                </button>
              </div>
            );
          })}
             
      </div>
    </div>
  );
}

export default Search;
