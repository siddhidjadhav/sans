import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function Merwans() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen relative flex flex-col bg-[#f7ebdf]">
            {/* Full Page First Image with Go Back Button */}
            <p className="underline text-base sm:text-lg md:text-xl lg:text-l cursor-pointer pl-5" onClick={() => navigate(-1)} >
        Go Back
</p>
            <div className="grid grid-cols-1 gap-6 p-6 flex-grow items-center justify-center">
                <img src="m1.avif" alt="eco2" className="w-3/4 mx-auto" />
                <img src="m2.avif" alt="eco2" className="w-3/4 mx-auto" />
                <img src="m3.avif" alt="eco3" className="w-3/4 mx-auto" />
                <img src="m4.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m5.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m6.png" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m7.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m8.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m9.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m10.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m11.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m12.avif" alt="eco4" className="w-3/4 mx-auto" />
                <img src="m13.avif" alt="eco4" className="w-3/4 mx-auto" />
                
                
                

               
            </div>
        </div>
    );
}

export default Merwans;
