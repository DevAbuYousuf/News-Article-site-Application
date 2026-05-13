import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="shadow-lg sticky">
        <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        <Link to={"/"} className=' '>
            <h1 className=" text-xl sm:text-2xl flex flex-wrap text-gray-800 font-bold">
                <span>Daily</span>
                <span>News</span>
            </h1>
        </Link>
        <form action="" className="p-3 bg-slate-100 rounded-lg flex items-center">
            <input type="text" placeholder='Search...' className='focus:outline-none  bg-transparent w-24 sm:w-60' />

            <button>
                <FaSearch className="text-slate-600" />
            </button>
        </form>
         <ul className="">
            <Link to={"/"}>
                <li className="hidden lg:inline px-4 py-2 text-gray-700 hover:text-gray-900 hover:underline">Home</li>
            </Link>
            <Link to={"/about"}>
                <li className="hidden lg:inline px-4 py-2 text-gray-700 hover:text-gray-900 hover:underline">About</li>
            </Link>
            <Link to={"/news"}>
                <li className="hidden lg:inline px-4 py-2 text-gray-700 hover:text-gray-900 hover:underline">News Articles</li>
            </Link>
            
         </ul>
          <Link to={"/sign-in"} className=' '>
                <Button>Sign In</Button>
            </Link>
        </div>
    </header>
  )
}

export default Header
