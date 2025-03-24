import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <div className="relative bg-red-600 text-white min-h-screen">
        <div className="flex flex-row mx-auto w-fit ">
          <div className="flex flex-col justify-center items-center text-center p-4">
            <span className="text-3xl text-white-600 italic mt-60 text-center">
              GRAPHIC AND COMMUNICATION DESIGNER
            </span>
            <span className="font-extrabold text-8xl mt-10 text-center">
              Hi there!
            </span>
            <span className="font-extrabold text-8xl text-center">
              I'm Sanskriti.
            </span>
            <span className="font-extrabold text-4xl mt-10 text-center">
              PORTFOLIO 2024
            </span>
          </div>
        </div>
      </div>
      
      {/* Updated Bottom Section */}
      <div className="bg-black flex flex-col items-center justify-center text-white w-full py-20 space-y-4">
        {/* Footer Image with Transition */}
        <motion.img 
          src="sansfooter.png" 
          alt="Footer Image" 
          className="w-auto h-auto max-w-full max-h-full mb-4 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />


        
      </div>
    </>
  );
};

export default Home;
