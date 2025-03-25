// import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
        <footer className="bg-kOrange w-full px-10 mt-10">
            <div>
                <Link to={"/"} className="block cursor-pointer py-1">
                    <img src={logo} alt="Logo" className="w-28" />
                </Link>
                
                
                
            </div>
            <div>
                <hr />
            </div>
            <div className="container flex flex-col items-start justify-center px-4 py-8 mx-auto text-center lg:px-1 lg:py-3 mt-2">
                <p className="text-sm text-slate-600">© 2025 Konoha Technologies. All rights reserved.</p>
            </div>
        </footer>
    
    
    
    
    </>
  )
}

export default Footer