import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

function CineCatlog() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold flex-1 text-center text-red-500">
            Cinematography And Editing
          </h1>
        </div>

        {/* Cinematography Container */}
        <div className="p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col items-center w-full space-y-12">
          {[
            {
              title: "Self Interpretation Edit- Kung Fu Panda",
              img: "Kungfu.avif",
              desc: "Presenting my interpretation of a film in a visual format and extending the film to a new experience.",
              link: "/kungfu" // Link to Card.js
            },
            {
              title: "Short Film - Delusion",
              img: "Delusion.avif",
              desc: "A short film made with the help of my phone, few of my actor friends and some basic software skills!",
              link: "/delusion" // Link to Kalpana.js
            },
            {
              title: "Short Film - Day in life at Avantika",
              img: "Avantika.avif",
              desc: "My very first attempt at capturing a day in my life at Avantika University and turning it into something memorable using Premiere Pro.",
              link: "/avantika" // Link to CN.js
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

export default CineCatlog;
