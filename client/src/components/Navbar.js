import React, { useState } from 'react'
import logo from '../img/logo.png'
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const menuClassNames = isOpen ? 'flex flex-col items-center justify-center' : 'hidden'
  const navheight = isOpen ? 'h-40 transition-height duration-500 ease-out' : 'h-15 transition-height duration-500 ease-out'
  
  return (
    <div className='pb-10'>
      <nav 
      className={`fixed bg-blue-700 w-full ${navheight}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img src={logo} className="block h-8 w-auto lg:hidden" alt="Our Logo" />
                <img src={logo} className="hidden h-8 w-auto lg:block" alt="Our Logo" />
                <span className="ml-3 text-gray-300 font-medium">Real Estate Price Predictor</span>
              </div>
              <div className=" md:ml-auto flex flex-wrap items-center text-base justify-center hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:transition-bg duration-500 rounded-md px-3 py-2 text-sm font-medium " aria-current="page">Home</Link>
                  <Link to="/map" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:transition-bg duration-500 rounded-md px-3 py-2 text-sm font-medium">Map</Link>
                  <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white hover:transition-bg duration-500 rounded-md px-3 py-2 text-sm font-medium">About</Link>
                </div>
              </div>
              <div className="sm:hidden " id="mobile-menu">
                <button 
                  style={{
                    position: "fixed", top: "18px", right: "4px"
                  }}
                  onClick={toggleNavbar}>
                  <MenuIcon style={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className={`bg-blue-700 ${menuClassNames}`}>
            <hr style={{ width: "100vw" }} />
            <Link to="/" className="block px-4 py-2 font-bold text-gray-300 hover:bg-gray-300">Home</Link>
            <hr style={{ width: "100vw" }} />
            <Link to="/map" className="block px-4 py-2 font-bold text-gray-300 hover:bg-gray-300">Map</Link>
            <hr style={{ width: "100vw" }} />
            <Link to="/about" className="block px-4 py-2 font-bold text-gray-300 hover:bg-gray-300">About</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
