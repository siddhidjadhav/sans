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
                    <a href="https://example.com/cinematography" target="_blank" rel="noopener noreferrer">
                        <img
                            src="Cinematography.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Cinematography"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2">CINEMATOGRAPHY</p>
                </div>

                <div className="flex flex-col items-center">
                    <a href="https://example.com/branding" target="_blank" rel="noopener noreferrer">
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
                    <a href="https://example.com/creative-other" target="_blank" rel="noopener noreferrer">
                        <img
                            src="creative&other.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Creative and Other"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2">CREATIVE AND OTHER</p>
                </div>

                <div className="flex flex-col items-center">
                    <a href="https://example.com/sketches-paintings" target="_blank" rel="noopener noreferrer">
                        <img
                            src="sketches&painting.avif"
                            className="w-full max-w-[10000px] xl:max-w-[10000px] lg:max-w-[9500px] md:max-w-[9000px] sm:max-w-[8500px] h-[30vh] xl:h-[25vh] lg:h-[20vh] md:h-[15vh] sm:h-[10vh] object-cover transition-all duration-500"
                            alt="Sketches and Paintings"
                        />
                    </a>
                    <p className="underline text-center text-lg mt-2 pb-16">SKETCHES AND PAINTINGS</p>
                </div>
            </div>

            
            <div className="bg-black flex flex-col items-center justify-center text-white w-full py-20 space-y-4">
                {/* Contact and Navigation Lists */}
                <div className="flex flex-wrap justify-between w-full max-w-3xl items-start gap-4">
                    <ul className="space-y-1">
                        <li className="text-lg font-semibold">CONTACT</li>
                        <li><a href="mailto:sanskritichauhan1234@gmail.com" className="hover:underline">sanskritichauhan1234@gmail.com</a></li>
                        <li><a href="tel:+919867067656" className="hover:underline">+91 9867067656</a></li>
                    </ul>

                    <nav>
                        <ul className="flex flex-col items-center space-y-1">
                            <Link to="/" className="text-lg hover:underline">HOME</Link>
                            <Link to="/about" className="text-lg hover:underline">ABOUT</Link>
                            <Link to="/portfolio" className="text-lg hover:underline">PORTFOLIO</Link>
                            <Link to="/photography" className="text-lg hover:underline">PHOTOGRAPHY</Link>
                        </ul>
                    </nav>
                </div>

                {/* Name Display - Animated */}
                <motion.div 
                    ref={ref} // Attach the ref here for visibility detection
                    className=" text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="mt-36 font-extrabold text-4xl lg:text-5xl whitespace-nowrap block">SANSKRITI CHAUHAN</span>
                </motion.div>
            </div>
        </>
    );
}

export default Portfolio;
