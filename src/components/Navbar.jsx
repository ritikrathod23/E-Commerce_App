import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import logo from "../accest/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items  = useSelector(state => state.cart);
  const data = items
  const len = data.length;
  console.log("items.cart",len)
  return (
    <header
    className="
      header sticky top-0
      bg-white shadow-md 
      flex items-center justify-between 
      px-4 md:px-16 lg:px-48 py-2
      "
  >
    {/* Logo */}
    <Link to={"/"}>
      <h1 className="flex items-center">
        <img src={logo} alt="" className="w-10 h-10 mr-3 md:w-14 md:h-14" />
        <span className="font-semibold text-lg md:text-xl-  hidden md:block ">SmileShop</span>
      </h1>
    </Link>
  
    {/* Navigation */}
    {/* search */}

    
    {/* <form className="max-w-md mx-auto ">   
        
        <div className="relative  ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" className="block md:w-96 h-10 w-full  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
            <button type="submit" className=" hidden md:block text-white h-8 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-sm px-4 top-1 text-center content-center items-center py-2 ">Search</button>
        </div>
    </form> */}

  
    {/* Buttons */}
    <div className="flex items-center justify-end space-x-4">
      {/* <FaSearch className="text-xl md:text-2xl cursor-pointer" /> */}
      
      <Link to={"/cart"} className="relative">
        <FaCartPlus className="text-xl md:text-2xl cursor-pointer" />
        <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          {len}
        </div>
      </Link>
    </div>
  </header>
  
  );
}

export default Navbar;
