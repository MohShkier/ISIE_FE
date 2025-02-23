import React, { useState, useRef, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { LiaDonateSolid } from "react-icons/lia";
import { DiAptana } from "react-icons/di";

const BottomBar = () => {


  return (
    <div className="fixed z-10 bottom-0 w-full bg-white border-t border-gray-300 shadow-lg flex justify-around py-2 text-sm text-gray-600 lg:hidden">
      <div className="flex flex-col items-center">
        <AiOutlineHome className="text-2xl" />
        <span>Home</span>
      </div>
      <div className="flex flex-col items-center">
        <AiOutlineHome className="text-2xl" />
        <span>Products</span>
      </div>
      
      <div className="flex flex-col items-center">
        <DiAptana className="text-2xl" />
        <span>Categories</span>
      </div>
      <div className="flex flex-col items-center">
        <MdOutlineSecurity className="text-2xl" />
        <span>Contact Us</span>
      </div>
      <div className="flex flex-col items-center relative">
        <LiaDonateSolid className="text-2xl" />
        <span>About Us</span>
       
      </div>
 
    </div>
  );
};

export default BottomBar;
