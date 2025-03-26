import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Photography() {
    const { ref, inView } = useInView();
    const navigate = useNavigate(); // Initialize useNavigate

    // Image arrays
    const bmImages = [
        "/bm1.avif",
        "/bm2.avif",
        "/bm3.avif",
        "/bm4.avif",
        "/bm5.avif",
        "/bm6.avif",
        "/bm7.avif"
    ];

    const carouselImages = [
        "/carousel1.avif",
        "/carousel2.avif",
        "/carousel3.avif",
        "/carousel4.avif",
        "/carousel5.avif",
        "/carousel6.avif",
        "/carousel7.avif",
        "/carousel8.avif",
        "/carousel9.avif",
        "/carousel10.avif"
    ];

    // Function to go back to the previous page
    const handleGoBack = () => {
        navigate(-1); // navigate(-1) takes the user back to the previous page
    };

    return (
        <div className="p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col items-center text-center">
            {/* Back Button and Heading */}
            <div className="w-full flex items-center justify-between">
                <button 
                    onClick={handleGoBack} 
                    className="underline text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer pl-5">
                    Go Back
                </button>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex-1 text-center">Photography</h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg pl-2 sm:pl-5 mt-4 w-full sm:w-3/4 lg:w-1/2 break-words sm:whitespace-normal whitespace-pre-line ml-10">
                Some of my best photography over the course of 2 years.
            </p>

            {/* Gallery Section */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                {/* BM Images */}
                {bmImages.map((image, index) => (
                    <div
                        key={index}
                        className={`relative ${index % 3 === 0 ? 'col-span-2' : ''} ${index % 2 === 0 ? 'row-span-2' : ''}`}
                    >
                        <img
                            src={image}
                            alt={`BM Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>

            {/* Gallery Section for Carousel Images */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                {/* Carousel Images */}
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`relative ${index % 3 === 0 ? 'col-span-2' : ''} ${index % 2 === 0 ? 'row-span-2' : ''}`}
                    >
                        <img
                            src={image}
                            alt={`Carousel Image ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photography;
