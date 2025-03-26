import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function Ecosprout() {
    const navigate = useNavigate();

    return (

        <div className="w-full min-h-screen relative flex flex-col bg-white">
<p className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5" onClick={() => navigate(-1)} >
Go Back
</p>
            {/* Full Page First Image with Go Back Button */}
            <div className="relative w-full h-screen">
                <img src="eco1.avif" className="w-full h-full object-cover" alt="eco1" />
                
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-6 p-6 flex-grow items-center justify-center">
                <img src="eco2.avif" alt="eco2" className="w-3/4 mx-auto" />
                <img src="eco3.avif" alt="eco3" className="w-3/4 mx-auto" />
                <img src="eco4.avif" alt="eco4" className="w-3/4 mx-auto" />
                
                {/* Image Carousel After eco4 */}
                <Carousel showThumbs={false} infiniteLoop autoPlay className="w-3/4 mx-auto">
                    <img src="carousel1.avif" alt="carousel1" />
                    <img src="carousel2.avif" alt="carousel2" />
                    <img src="carousel3.avif" alt="carousel3" />
                    <img src="carousel4.avif" alt="carousel4" />
                    <img src="carousel5.avif" alt="carousel5" />
                </Carousel>
                
                <img src="eco5.avif" alt="eco5" className="w-3/4 mx-auto" />
                <img src="eco6.avif" alt="eco6" className="w-3/4 mx-auto" />
                
                {/* Side-by-Side Images eco7 & eco8 */}
                <div className="flex flex-col md:flex-row gap-6 justify-center w-3/4 mx-auto">
                    <img src="eco7.avif" alt="eco7" className="w-full md:w-1/2" />
                    <img src="eco8.avif" alt="eco8" className="w-full md:w-1/2" />
                </div>
                
                <img src="eco9.avif" alt="eco9" className="w-3/4 mx-auto" />
                <img src="eco10.avif" alt="eco10" className="w-3/4 mx-auto" />
                <img src="eco11.avif" alt="eco11" className="w-3/4 mx-auto" />
                
                {/* Side-by-Side Images eco12 & eco13 */}
                <div className="flex flex-col md:flex-row gap-6 justify-center w-3/4 mx-auto">
                    <img src="eco12.avif" alt="eco12" className="w-full md:w-1/2" />
                    <img src="eco13.avif" alt="eco13" className="w-full md:w-1/2" />
                </div>
                
                {/* Image Carousel Before eco14 */}
                <div className="flex flex-col md:flex-row gap-6 justify-center w-3/4 mx-auto">
                    <Carousel showThumbs={false} infiniteLoop autoPlay className="w-full md:w-3/4">
                        <img src="carousel6.avif" alt="carousel6" />
                        <img src="carousel7.avif" alt="carousel7" />
                        <img src="carousel8.avif" alt="carousel8" />
                        <img src="carousel9.avif" alt="carousel9" />
                        <img src="carousel10.avif" alt="carousel10" />
                    </Carousel>
                    <img src="eco14.avif" alt="eco14" className="w-full md:w-1/4" />
                </div>
            </div>
        </div>
    );
}

export default Ecosprout;
