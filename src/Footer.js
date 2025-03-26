import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
  const { ref, inView } = useInView();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to the top
    });
  };

  return (
    <footer className="bg-black text-white py-10 px-4 md:px-10 w-full">
      <div className="flex flex-col items-center space-y-8">
        
        {/* Contact & Navigation Links - Responsive Layout */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-3xl space-y-6 md:space-y-0 md:space-x-10">
          
          {/* Contact Section */}
          <ul className="text-center md:text-left space-y-2">
            <li className="text-lg font-semibold">CONTACT</li>
            <li>
              <a href="mailto:sanskritichauhan1234@gmail.com" className="hover:underline">
                sanskritichauhan1234@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919867067656" className="hover:underline">
                +91 9867067656
              </a>
            </li>
          </ul>

          {/* Navigation Links */}
          <nav>
            <ul className="flex flex-col text-center md:text-left space-y-2">
              <li>
                <Link to="/" className="text-lg hover:underline" onClick={scrollToTop}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-lg hover:underline" onClick={scrollToTop}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-lg hover:underline" onClick={scrollToTop}>
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link to="/photography" className="text-lg hover:underline" onClick={scrollToTop}>
                  PHOTOGRAPHY
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Animated Name Section */}
        <motion.div
          ref={ref}
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-extrabold text-3xl md:text-4xl lg:text-5xl block">
            SANSKRITI CHAUHAN
          </span>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
