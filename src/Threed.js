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

      
        </>
    );
}

export default Threed;