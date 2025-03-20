import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Ensure it's imported

function Catlog() {
  const { ref, inView } = useInView(); // Use the hook to get ref and inView state

  return (
    <>
      <div>
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-red-500 mt-10 text-center">DIGITAL</h1>
        <p className="underline text-lg sm:text-xl lg:text-2xl pl-5">Go Back</p>

        <div className="flex flex-col pt-10 justify-center items-center">
          {/* First Item */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-[1200px] mb-10">
            <div className="flex flex-col sm:w-1/2 p-5 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Typography - Alpha card set</h1>
              <p className="text-base sm:text-lg lg:text-xl">Designing playing cards considering exploration of Anatomy of Typography.</p>
              <button className="mt-5 px-6 py-3 border border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all text-base sm:text-lg lg:text-xl">Read More</button>
            </div>
            <img src="Playing Cards Mockup.avif" className="w-[100%] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover border-2 border-gray-300 rounded-md" alt="Typography" />
          </div>

          {/* Second Item */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-[1200px] mb-10">
            <div className="flex flex-col sm:w-1/2 p-5 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Showreel - Kalpana Chawla</h1>
              <p className="text-base sm:text-lg lg:text-xl">Exploring a historical event through a captivating animated timeline with the use of AI tools to generate visuals. Software Used - After Effects.</p>
              <button className="mt-5 px-6 py-3 border border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all text-base sm:text-lg lg:text-xl">Read More</button>
            </div>
            <img src="kalpana.avif" className="w-[100%] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover border-2 border-gray-300 rounded-md" alt="Kalpana" />
          </div>

          {/* Third Item */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-[1200px] mb-10">
            <div className="flex flex-col sm:w-1/2 p-5 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Animation - Cartoon Network</h1>
              <p className="text-base sm:text-lg lg:text-xl">In this assignment, I created animation that visually communicates a topic using Adobe After Effects and Adobe Animate.</p>
              <button className="mt-5 px-6 py-3 border border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all text-base sm:text-lg lg:text-xl">Read More</button>
            </div>
            <img src="cn.avif" className="w-[100%] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover border-2 border-gray-300 rounded-md" alt="Cartoon Network" />
          </div>

          {/* Fourth Item */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-[1200px] mb-10">
            <div className="flex flex-col sm:w-1/2 p-5 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Motion Poster - Black Mirror</h1>
              <p className="text-base sm:text-lg lg:text-xl">Animated a motion poster designed using advanced techniques in After Effects.</p>
              <button className="mt-5 px-6 py-3 border border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all text-base sm:text-lg lg:text-xl">Read More</button>
            </div>
            <img src="black_mirror.avif" className="w-[100%] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover border-2 border-gray-300 rounded-md" alt="Black Mirror" />
          </div>

          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full max-w-[1200px] mb-10">
            <div className="flex flex-col sm:w-1/2 p-5 text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">3D Modelling - Character Design</h1>
              <p className="text-base sm:text-lg lg:text-xl">A hybrid between a mythical and a human, designed and modelled using Zbrush.</p>
              <button className="mt-5 px-6 py-3 border border-2 border-black border-solid hover:bg-black hover:text-white transition-all text-base sm:text-lg lg:text-xl">Read More</button>
            </div>
            <img src="3D.avif" className="w-[100%] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover border-2 border-gray-300 rounded-md" alt="3D Modelling" />
          </div>
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

export default Catlog;
