import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Cn() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
  <p className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5" onClick={() => navigate(-1)} >
            Go Back
    </p>

      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold text-black">A Cartoon Network-Animation</h2>
      </div>

      {/* Video Placeholder with Cover Image */}
      <div className="flex justify-center items-center w-full mt-10">
        <div
          className="relative w-full max-w-4xl h-[400px] sm:h-[500px] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: "url('/cn.avif')" }}
          onClick={() => setIsVideoOpen(true)}
        >
          
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-6xl bg-black p-4 rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsVideoOpen(false)}
            >
              ✖
            </button>

            {/* Video Player */}
            <video
              controls
              autoPlay
              className="w-full h-[90vh] rounded-lg"
            >
              <source src="/cn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      
    </>
  );
}

export default Cn;
