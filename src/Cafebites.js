import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function Cafebites() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen relative flex flex-col bg-[#f7ebdf]">
            {/* Full Page First Image with Go Back Button */}
            <button 
                className="absolute text-2xl top-4 left-4 text-black px-6 py-3"
                onClick={() => navigate(-1)}
            >
                Go Back
            </button>
            <div className="grid grid-cols-1 gap-6 p-6 flex-grow items-center justify-center">
                <img src="cb1.avif" alt="eco2" className="w-3/4 mx-auto" />
                <img src="cb2.avif" alt="eco2" className="w-3/4 mx-auto" />
                <img src="cb3.avif" alt="eco3" className="w-3/4 mx-auto" />
                <img src="cb4.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb5.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb6.png" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb7.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb8.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb9.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb10.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb11.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb12.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb13.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb14.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="cb15.avif" alt="eco4" className="w-3/4 mx-auto" />
                
                <div className="flex flex-col md:flex-row gap-6 justify-center w-3/4 mx-auto">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={5000} // Set interval for auto-scroll
                        className="w-full md:w-3/4"
                        renderArrowPrev={(clickHandler) => (
                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl p-2"
                                onClick={clickHandler}
                                style={{ zIndex: 10 }}
                            >
                                &#8249;
                            </button>
                        )}
                        renderArrowNext={(clickHandler) => (
                            <button
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl p-2"
                                onClick={clickHandler}
                                style={{ zIndex: 10 }}
                            >
                                &#8250;
                            </button>
                        )}
                    >
                        <img src="ccb1.avif" alt="carousel6" />
                        <img src="ccb2.avif" alt="carousel7" />
                    </Carousel>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center w-3/4 mx-auto">
                    <Carousel
                        showThumbs={false}
                        infiniteLoop
                        autoPlay
                        interval={5000} // Set interval for auto-scroll
                        className="w-full md:w-3/4"
                        renderArrowPrev={(clickHandler) => (
                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl p-2"
                                onClick={clickHandler}
                                style={{ zIndex: 10 }}
                            >
                                &#8249;
                            </button>
                        )}
                        renderArrowNext={(clickHandler) => (
                            <button
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl p-2"
                                onClick={clickHandler}
                                style={{ zIndex: 10 }}
                            >
                                &#8250;
                            </button>
                        )}
                    >
                        <img src="ccb3.avif" alt="carousel6" />
                        <img src="ccb4.avif" alt="carousel7" />
                        <img src="ccb5.avif" alt="carousel8" />
                        <img src="ccb6.avif" alt="carousel9" />
                        <img src="ccb7.avif" alt="carousel10" />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Cafebites;
