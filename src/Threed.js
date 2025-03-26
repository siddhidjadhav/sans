import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';

function Threed(){
    const { ref, inView } = useInView();
     const navigate = useNavigate(); 
    return(
        <>
 <p className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5" onClick={() => navigate(-1)} >
            Go Back
    </p>
      
        </>
    );
}

export default Threed;