import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-red-600">
            <nav className="flex items-center justify-between p-4">
                <h1 className="text-xl text-white font-serif font-pacifico">Sanskriti Chauhan</h1>
                
                {/* Hamburger Menu */}
                <button 
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <div className={`absolute top-16 left-0 w-full bg-red-600 p-4 flex flex-col items-center space-y-4 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:flex md:static md:w-auto md:space-x-8 md:space-y-0 md:flex-row`}>
                    <Link to="/" className="text-white text-xl font-serif font-pacifico hover:text-gray-300">HOME</Link>
                    <Link to="/about" className="text-white text-xl font-serif font-pacifico hover:text-gray-300">ABOUT</Link>
                    <Link to="/photography" className="text-white text-xl font-serif font-pacifico hover:text-gray-300">PHOTOGRAPHY</Link>
                    <Link to="/portfolio" className="text-white text-xl font-serif font-pacifico hover:text-gray-300">PORTFOLIO</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
