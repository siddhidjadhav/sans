import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
function Avantika(){
    const navigate = useNavigate();
    const { ref, inView } = useInView();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return(
        <>
          <p
          className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5"
          onClick={() => navigate(-1)}
          >
          Go Back
              </p>

            {/* Heading Section */}
            <div className="flex flex-col items-center justify-center mt-10">
              <h2 className="text-3xl font-bold text-black text-center">Day in life at Avantika-A short Film</h2>
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


<br></br>  <br></br><br></br>
                        
        </>
    )
};

export default Avantika;