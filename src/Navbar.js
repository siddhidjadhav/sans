import React from 'react';
import { Link } from 'react-router-dom';

const Navbar=()=>{

    return(
        <header className="flex justify-between items-center p-0">
        <nav className="flex items-center justify-between w-full bg-red-600 p-4">
          
            {/* <img src="logo.png" width="64" alt="Logo" className="ml-0" /> */}
                <h1 className="text-xl ml-5 text-white font-serif font-pacifico">Sanskriti Chauhan</h1> 
                <div className="flex space-x-8 ml-auto">
                    <Link to="/" className=" text-black text-xl font-serif font-pacifico">HOME</Link>
                    <Link to="/about" className=" text-black text-xl font-serif font-pacifico">ABOUT</Link>
                    <Link to="/photography" className="text-black text-xl font-serif font-pacifico">PHOTOGRAPHY</Link>
                    <Link to="/portfolio" className="text-black text-xl font-serif font-pacifico">PORTFOLIO</Link>
                </div>
        </nav>
        </header>
    )
}
export default Navbar;
