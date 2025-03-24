import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from 'react-router-dom';
import { footer } from "framer-motion/client";

function Footer() {
  const { ref, inView } = useInView();
  return(
    <>


     {/* Footer Section */}
          <div className="bg-black flex flex-col items-center justify-center text-white w-full py-20 space-y-4">
            <div className="flex flex-wrap justify-between w-full max-w-3xl items-start gap-4">
              <ul className="space-y-1">
                <li className="text-lg font-semibold">CONTACT</li>
                <li>
                  <a
                    href="mailto:sanskritichauhan1234@gmail.com"
                    className="hover:underline"
                  >
                    sanskritichauhan1234@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919867067656" className="hover:underline">
                    +91 9867067656
                  </a>
                </li>
              </ul>
              <nav>
                <ul className="flex flex-col items-center space-y-1">
                  <Link to="/" className="text-lg hover:underline">
                    HOME
                  </Link>
                  <Link to="/about" className="text-lg hover:underline">
                    ABOUT
                  </Link>
                  <Link to="/portfolio" className="text-lg hover:underline">
                    PORTFOLIO
                  </Link>
                  <Link to="/photography" className="text-lg hover:underline">
                    PHOTOGRAPHY
                  </Link>
                </ul>
              </nav>
            </div>
    
            {/* Name Display - Animated */}
            <motion.div
              ref={ref}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-extrabold text-4xl lg:text-5xl whitespace-nowrap block">
                SANSKRITI CHAUHAN
              </span>
            </motion.div>
          </div>
    </>
  );
}
export default Footer;