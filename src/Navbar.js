import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-red-600">
            <nav className="flex items-center justify-between p-4 relative">
                <h1 className="text-xl text-white font-serif font-pacifico">Sanskriti Chauhan</h1>

                {/* Hamburger Menu Button */}
                <button 
                    className="md:hidden text-white focus:outline-none z-50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} />}
                </button>

                {/* Fullscreen Menu Overlay */}
                <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 transition-all duration-300 z-40 
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>


                    <Link to="/" className="text-2xl font-serif font-pacifico text-black hover:text-gray-500" onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link to="/about" className="text-2xl font-serif font-pacifico text-black hover:text-gray-500" onClick={() => setIsOpen(false)}>ABOUT</Link>
                    <Link to="/photography" className="text-2xl font-serif font-pacifico text-black hover:text-gray-500" onClick={() => setIsOpen(false)}>PHOTOGRAPHY</Link>
                    <Link to="/portfolio" className="text-2xl font-serif font-pacifico text-black hover:text-gray-500" onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
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
