import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

function Card() {
     const { ref, inView } = useInView();
     const navigate = useNavigate(); 
  return (
    <>
    <p className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5" onClick={() => navigate(-1)} >
            Go Back
    </p>
      {/* Card 1 - Alpha Card Set with Grey Background and Title */}
      <div className="relative w-full bg-gray-300 p-8">
        <h2 className="absolute left-4 text-3xl font-bold text-black mt-5">Alpha Card Set - Typography Card</h2>
        <img src="Card1.avif" className="w-full mt-16 h-auto object-cover rounded-lg" alt="Alpha Card Set" />
       </div>

      {/* Stack Layout for the Other Images */}
      <div className="flex flex-col space-y-4 mt-8">
        {/* Card 2 */}
        <div className="w-full">
          <img src="Card2.png" className="w-full h-auto object-cover rounded-lg" alt="Card 2" />
        </div>

        {/* Card 3 */}
        <div className="w-full">
          <img src="Card3.png" className="w-full h-auto object-cover rounded-lg" alt="Card 3" />
        </div>

        {/* Card 4 */}
        <div className="w-full">
          <img src="Card4.avif" className="w-full h-auto object-cover rounded-lg" alt="Card 4" />
        </div>
      </div>

      
    </>
  );
}

export default Card;
