import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import React from "react";
const Profile = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
     
   <div
      className="relative inline-block group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setTimeout(()=>{
        setOpen(false)
      },300)}
    >
      {/* Avatar Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-8 h-8 rounded-full cursor-pointer bg-gray-600 text-white"
      >
        Y
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-40 z-50 bg-[#F7F4ED] divide-y divide-gray-300 rounded-lg shadow-sm 
        ${open ? "block" : "hidden"}`}
      >
        <div className="px-4 py-2 text-sm">
          <div className="cursor-pointer">Bonnie Green</div>
          <div className="font-medium truncate cursor-pointer text-xs">
            name@flowbite.com
          </div>
        </div>
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Dashboard
            </a>
          </li>
        </ul>
        <div className="py-1">
          <button onClick={()=>{
            localStorage.removeItem("token");
            navigate('/');
          }}className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
