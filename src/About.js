import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function About() {
    const bottomRef = useRef(null);
    const isInView = useInView(bottomRef, { once: true, margin: "-100px" });

    return (
        <>
            <div className="flex flex-col w-full min-h-screen">
                {/* Top section (Red) - Fullscreen */}
                <div className="bg-red-600 flex flex-col items-center justify-center p-10 text-center w-full min-h-screen space-y-6">
                    <motion.img
                        src="profile.avif"
                        className="h-auto max-h-[80vh] w-auto object-cover transition-all duration-300"
                        alt="Profile"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <span className="font-extrabold text-white text-5xl lg:text-6xl">ABOUT ME</span>
                    <motion.p
                        className="text-white text-lg max-w-3xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        I'm a communication designer who thrives on creativity and connection. I see design as a
                        way to tell stories and bring people together. When I'm not crafting visual magic, you'll
                        find me experimenting with video games, making potions in my room, or planning my next
                        travel adventure. I believe that great design starts with a spark of curiosity and a
                        dash of fun, and I can't wait to share, explore, and learn more every day!
                    </motion.p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center gap-20">
                        <button
                            className="bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition duration-200 w-40"
                            onClick={() => window.open('https://www.linkedin.com/in/sanskriti-chauhan-1664ba33b/', '_blank')}
                        >
                            LinkedIn
                        </button>

                        <button
                            className="bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition duration-200 w-40"
                            onClick={() => window.open('mailto:sanskritichauhan1234@gmail.com', '_blank')}
                        >
                            Email
                        </button>

                        <button
                            className="bg-black text-white px-6 py-3 hover:bg-white hover:text-black transition duration-200 w-40"
                            onClick={() => window.open('https://drive.google.com/file/d/1cypZb0AmTxQRITlIiSJg0oULeFkyDBw4/view', '_blank')}
                        >
                            Portfolio
                        </button>
                    </div>
                </div>

                {/* Bottom section (Black) - Scrolls into view */}
                <div ref={bottomRef} className="bg-black flex flex-col items-center justify-center text-white w-full py-20 space-y-4">
                    {/* Contact and Navigation Lists - Reduced spacing */}
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
                        className="mt-6 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="font-extrabold text-4xl lg:text-5xl whitespace-nowrap block">SANSKRITI CHAUHAN</span>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default About;
