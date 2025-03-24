import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
function Photography() {
    const { ref, inView } = useInView();
    return (
        <div className="p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col items-center text-center">
            <div className="w-full flex items-center justify-between">
                <p className="underline text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer pl-5">Go Back</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex-1 text-center">Photography</h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg pl-2 sm:pl-5 mt-4 w-full sm:w-3/4 lg:w-1/2 break-words sm:whitespace-normal whitespace-pre-line ml-10">
                Some of my best photography over the course of 2 years.
            </p>
            <div className="bg-black flex flex-col items-center justify-center text-white w-full py-20 space-y-4">
              </div>              
        </div>
    );
}

export default Photography;
