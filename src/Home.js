import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="relative bg-red-600 text-white min-h-screen">
          <div className="flex flex-row mx-auto w-fit ">
          
              <div className="flex flex-col justify-center items-center text-center p-4">
                {/* Graphic and Communication Designer in a different format */}
                <span className="text-3xl text-white-600 italic mt-60 text-center">
                          GRAPHIC AND COMMUNICATION DESIGNER
                    
                  </span>
                      <span className="font-extrabold text-8xl mt-10 text-center">
                        Hi there!
                      </span>
                      <span className="font-extrabold text-8xl text-center">
                        I'm Sanskriti.
                      </span>
                      <span className="font-extrabold text-4xl mt-10 text-center">
                        PORTFOLIO 2024
                      </span>
              </div>

          </div>
      </div>
          <div className="fixed bottom-0 left-0 w-full h-1/2 bg-black z-20 flex flex-col items-center justify-center text-white p-4">
     
      <img src="sansfooter.png" alt="Footer Image" className="w-auto h-auto max-w-full max-h-full mb-4 mx-auto" />

            <div className="flex justify-center items-center space-x-10 text-white ">
        
        <div className="text-center">
          <h2 className="text-l font-bold">CONTACT</h2>
          <p className="mt-1 text-l">SANSKRITI</p>
          <p className="mt-1 text-l">CHAUHAN</p>
          <p><a href="mailto:sanskritichauhan1234@gmail.com" className="text-white">sanskritichauhan12<p></p>34@gmail.com</a></p>
          <p><a href="tel:+919867067656" className="text-white">+91 9867067656</a></p>
        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="flex flex-col space-y-1 text-white justify-center items-center">
            <Link to="/" className=" text-white text-l  font-pacifico">HOME</Link>
              <Link to="/about" className=" text-white text-l font-pacifico">ABOUT</Link>
              <Link to="/portfolio" className="text-white text-l font-pacifico">PORTFOLIO</Link>
              <Link to="/photography" className="text-white text-l font-pacifico">PHOTOGRAPHY</Link>
          </ul>
        </nav>

      </div>
      <div className="mt-10">
        <span className="font-extrabold text-6xl mt-16 text-center">
          SANSKRITI CHAUHAN
        </span>
     </div>
    </div>
    </>
  );
};

export default Home;
