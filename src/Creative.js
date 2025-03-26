import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Creative() {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const images1 = ["/creativec11.avif", "/creativec12.avif", "/creativec13.avif"];
  const images2 = ["/creativec21.avif", "/creativec22.avif"];

  return (
    <>
      {/* Go Back Button */}
      <p
        className="underline text-base sm:text-lg md:text-xl lg:text-2xl cursor-pointer pl-5 mt-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </p>

      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-red-500 text-center mt-5 mb-10">
          Other Works
        </h2>
      </div>

      {/* Video Section */}
      <div className="flex flex-col items-center mt-10 w-full px-4">
        {/* Video 1 */}
        <div className="w-full max-w-4xl relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mt-10 mb-5">
            Foley - Sound Design
          </h2>
          <div
            className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center cursor-pointer flex items-center justify-center mb-10"
            style={{ backgroundImage: "url('/kalpana.avif')" }}
            onClick={() => setIsVideoOpen(true)}
          ></div>
        </div>

        {/* Video 2 */}
        <div className="w-full max-w-4xl relative mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mt-10 mb-5">
            Representation of liquid through multi-sensory visualization.
          </h2>
          <div
            className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center cursor-pointer flex items-center justify-center mb-10"
            style={{ backgroundImage: "url('/kalpana.avif')" }}
            onClick={() => setIsVideoOpen(true)}
          ></div>
        </div>
      </div>

      {/* Carousel Section */}
      <h2 className="text-2xl sm:text-3xl text-black text-center mt-10">The Product</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6 px-4">
        {/* Carousel 1 */}
        <div className="w-full md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            showArrows
          >
            {images1.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img src={image} alt={`Product Slide ${index + 1}`} className="rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Carousel 2 */}
        <div className="w-full md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            showArrows
          >
            {images2.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img src={image} alt={`Design Slide ${index + 1}`} className="rounded-lg w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}

export default Creative;
