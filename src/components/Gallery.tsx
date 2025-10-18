import React, { useEffect, useState } from "react";
import Masonry from "@/effect/Masonry";
import SplitText from "@/effect/SplitText";
import { fetchGalleryImages, GalleryImage } from "@/api/fetchGallery";
import { urlFor } from "@/lib/imageUrl";

const Gallery: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGallery() {
      const images = await fetchGalleryImages();
      setGalleryImages(images);
      setLoading(false);
    }
    loadGallery();
  }, []);

  // Convert Sanity images to Masonry format with optimized URLs
  const items = galleryImages.map((img) => {
    const imageUrl = urlFor(img.image)
      .width(800)
      .quality(80)
      .auto('format')
      .url();

    // Random heights for masonry effect
    const heights = [300, 350, 400, 450, 500, 550, 600];
    const randomHeight = heights[Math.floor(Math.random() * heights.length)];

    return {
      id: img._id,
      img: imageUrl,
      url: imageUrl,
      height: randomHeight,
    };
  });

  return (
    <section className="bg-[#F7F7F7] min-h-screen py-16 px-4 md:px-20">
      <div className="flex justify-center">
        <SplitText
          text="Gallery"
          className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-10"
          delay={150}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.3}
          rootMargin="-50px"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-gray-600 font-lexend text-lg">Loading gallery...</p>
        </div>
      ) : items.length > 0 ? (
        <Masonry
          items={items}
          ease="power3.out"
          duration={1}
          stagger={0.15}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      ) : (
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-gray-600 font-lexend text-lg">No gallery images available yet.</p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
