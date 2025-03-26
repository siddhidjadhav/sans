import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
function Kungfu(){
    const navigate = useNavigate();
    const { ref, inView } = useInView();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return(
        <>
      <p className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5" onClick={() => navigate(-1)} >
            Go Back
    </p>

      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-3xl font-bold text-black text-center">Kung Fu Panda</h2>
      </div>

      {/* Video Placeholder with Cover Image */}
      <div className="flex justify-center items-center w-full mt-10 px-4">
        <div
          className="relative w-full max-w-4xl h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-cover bg-center cursor-pointer flex items-center justify-center"
          style={{ backgroundImage: "url('/kalpana.avif')" }}
          onClick={() => setIsVideoOpen(true)}
        >
          
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-6xl bg-black p-4 rounded-lg shadow-lg">
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
              className="w-full h-auto max-h-[80vh] rounded-lg"
            >
              <source src="/kalpana.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

        
<br></br>  <br></br><br></br>
    
        </>
    )
};

export default Kungfu;