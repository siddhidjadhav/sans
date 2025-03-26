import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Sketches() {
  const navigate = useNavigate();

  const images2 = [
    "/bodyfacec1.avif",
    "/bodyfacec2.avif",
    "/bodyfacec3.avif",
    "/bodyfacec4.avif",
    "/bodyfacec5.avif",
    "/bodyfacec6.avif",
  ];

  const images = [
    "sketch1.avif",
    "sketch2.avif",
    "sketch3.avif",
    "sketch4.avif",
    "sketch5.avif",
    "sketch6.avif",
    "sketch7.avif",
    "sketch8.avif",
  ];
  const images22 = [
    "sketch21.avif",
    "sketch22.avif",
    "sketch23.avif",
    "sketch24.avif",
    "sketch25.avif",
  ];

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
        <h2 className="text-5xl font-bold text-red-500 text-center mt-2 mb-10">
          SKETCHES AND PAINTINGS
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-10 lg:px-20">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sketch ${index + 1}`}
            className="shadow-lg mx-auto w-full h-auto"
          />
        ))}
      </div>

      {/* Carousel Section - Body and Face Anatomy */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 md:px-20 gap-10 lg:gap-16">
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
                <img
                  src={image}
                  alt={`Design Slide ${index + 1}`}
                  className="w-full h-auto object-contain max-h-[400px]" // Adjusted image size
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Text Section - Body and Face Anatomy */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Body and Face Anatomy
          </h2>
          <p className="text-lg md:text-2xl mt-3">
            I've been exploring the fascinating world of muscles and bones through sketches.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
          <img
            src="/bodyface2.avif"
            className="w-full h-auto object-contain max-h-[400px]" // Adjusted image size
          />
        </div>
      </div>

      {/* Carousel Section - Perspective Understanding */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-4 md:px-20 gap-10 lg:gap-16">
        <div className="w-full md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
            showArrows
          >
            {images22.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Design Slide ${index + 1}`}
                  className="w-full h-auto object-contain max-h-[400px]" // Adjusted image size
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Text Section - Perspective Understanding */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Perspective Understanding
          </h2>
          <p className="text-lg md:text-2xl mt-3">
            Take a look at some of my drawings that play with depth and dimension.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-0">
          <img
            src="/bodyface22.avif"
            className="w-full h-auto object-contain max-h-[400px]" // Adjusted image size
          />
        </div>
      </div>
      <br></br><br></br>
    </>
  );
}

export default Sketches;
