import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Ensure it's imported

function Portfolio() {
    // Create reference for the element we want to observe
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.5, // 50% of the element should be in view
    });

    return (
        <>
            <h1 className="font-extrabold text-5xl text-red-600 mt-10 text-center">MY WORKS</h1>

            <Link to="/portfolio" className="flex items-center justify-center text-black underline text-lg font-pacifico pt-10">
                My Portfolio
            </Link>

            {/* First Row: Three Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-3">
                <div className="flex flex-col items-center">
                    <a href="/catlog" rel="noopener noreferrer">
                        <img
                            src="Playing Cards Mockup.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Digital"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2">DIGITAL</p>
                </div>

                <div className="flex flex-col items-center">
                    <a href="/cinecatlog" rel="noopener noreferrer">
                        <img
                            src="Cinematography.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Cinematography"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2">CINEMATOGRAPHY</p>
                </div>

                <div className="flex flex-col items-center">
                    <a href="/brandcat"  rel="noopener noreferrer">
                        <img
                            src="branding.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Branding"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2">BRANDING</p>
                </div>
            </div>

            {/* Second Row: Two Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-3">
                <div className="flex flex-col items-center">
                    <a href="/creative"  rel="noopener noreferrer">
                        <img
                            src="creative&other.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Creative and Other"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2">CREATIVE AND OTHER</p>
                </div>

                <div className="flex flex-col items-center">
                    <a href="/sketches"  rel="noopener noreferrer">
                        <img
                            src="sketches&painting.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Sketches and Paintings"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2 pb-16">SKETCHES AND PAINTINGS</p>
                </div>
            </div>

            
            
        </>
    );
}

export default Portfolio;
