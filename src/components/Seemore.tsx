import React, { useEffect, useState } from "react";
import RollingGallery from "../effect/RollingGallery.tsx";
import { fetchFeaturedGalleryImages } from "../api/fetchGallery";
import { urlFor } from "../lib/imageUrl";

const Seemore: React.FC = () => {
  const [rollingGalleryImages, setRollingGalleryImages] = useState<{ id: number; src: string; alt: string }[]>([]);

  useEffect(() => {
    async function loadFeaturedImages() {
      const images = await fetchFeaturedGalleryImages();

      // Convert Sanity images to RollingGallery format
      const formattedImages = images.map((img, index) => ({
        id: index + 1,
        src: urlFor(img.image)
          .width(600)
          .quality(80)
          .auto('format')
          .url(),
        alt: img.alt,
      }));

      setRollingGalleryImages(formattedImages);
    }
    loadFeaturedImages();
  }, []);

  return (
    <section className="w-full bg-[#F7F7F7] px-4 md:px-20 py-16 overflow-hidden">
      <h1 className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
        See More
      </h1>
      <div className="w-full max-w-screen-xl mx-auto overflow-hidden">
        {rollingGalleryImages.length > 0 ? (
          <RollingGallery images={rollingGalleryImages} autoplay pauseOnHover />
        ) : (
          <div className="flex justify-center items-center h-[400px]">
            <p className="text-gray-600 font-lexend text-lg">Loading gallery...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Seemore;
