import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

function Catlog() {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col items-center text-center flex-grow">
        <div className="w-full flex items-center justify-between">
          <p className="underline text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer pl-5" onClick={() => navigate(-1)} >
            Go Back
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex-1 text-center">
            DIGITAL
          </h1>
        </div>

        {/* Cards Container */}
        <div className="p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col items-center w-full space-y-12">
          {[
            {
              title: "Typography - Alpha Card Set",
              img: "Playing Cards Mockup.avif",
              desc: "Designing playing cards considering exploration of Anatomy of Typography.",
              link: "/card" // Link to Card.js
            },
            {
              title: "Showreel - Kalpana Chawla",
              img: "kalpana.avif",
              desc: "Exploring a historical event through a captivating animated timeline with the use of AI tools to generate visuals.\n\nSoftware Used: After Effects.",
              link: "/kalpana" // Link to Kalpana.js
            },
            {
              title: "Animation - Cartoon Network",
              img: "cn.avif",
              desc: "In this assignment, I created animation that visually communicates a topic using Adobe After Effects and Adobe Animate.",
              link: "/cn" // Link to CN.js
            },
            {
              title: "Motion Poster - Black Mirror",
              img: "black_mirror.avif",
              desc: "Animated a motion poster designed using advanced techniques in After Effects.",
              link: "/blackmirror" // Link to BlackMirror.js
            },
            {
              title: "3D Modelling-Character Design",
              img: "3D.avif",
              desc: "A hybrid between a mythical and a human, designed and modelled using Zbrush.",
              link: "/threed" // Link to ThreeD.js
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row-reverse items-center w-full space-y-6 md:space-y-0 md:space-x-8"
            >
              {/* Text Section */}
              <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {item.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl mt-4 max-w-md">
                  {item.desc}
                </p>
                <Link to={item.link} className="border border-black px-6 py-3 text-base mt-4 transition duration-300 hover:bg-black hover:text-white">
                  Read More
                </Link>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 w-full flex justify-center">
                <img
                  src={item.img}
                  className="w-11/12 sm:w-4/5 md:w-full lg:w-4/5 xl:w-3/5 h-auto rounded-lg shadow-md"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Catlog;
