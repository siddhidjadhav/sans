import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-red-600 text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic mt-10">
            GRAPHIC AND COMMUNICATION DESIGNER
          </span>
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-6">
            Hi there!
          </h1>
          <h2 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            I'm Sanskriti.
          </h2>
          <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl mt-6 block">
            PORTFOLIO 2024
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-black flex flex-col items-center justify-center text-white w-full py-16">
        {/* Footer Image with Transition */}
        <motion.img 
          src="sansfooter.png" 
          alt="Footer Image" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </>
  );
};

export default Home;
