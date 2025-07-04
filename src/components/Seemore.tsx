import React from "react";
import { galleryImages } from "../data/GalleryData.tsx";

const Seemore: React.FC = () => {
    return (
        <div className="w-full bg-[#F7F7F7] px-4 md:px-20 py-16">  
            <h1 className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
                See More
            </h1>
            <div className="flex justiyfy-center">
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4">  
                {galleryImages.map((image) => (
                    <div key={image.id} className="flex-shrink-0 w-48 sm:w-56 md:w-64">
                        <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x600/cccccc/FFFFFF?text=Error'; }} // Fallback
                        />
                    </div>
              ))}
                </div>

            </div>
        </div>
    );
};

export default Seemore;