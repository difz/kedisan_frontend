import React from "react";
import Masonry from "@/effect/Masonry";
import SplitText from "@/effect/SplitText";
import gallery1 from '../images/gallery1.jpeg';
import gallery2 from '../images/gallery2.jpeg';
import gallery3 from '../images/gallery3.jpeg';
import gallery4 from '../images/gallery4.jpeg';
import gallery5 from '../images/gallery5.jpeg';
import gallery6 from '../images/gallery6.jpeg';
import gallery7 from '../images/gallery7.jpeg';
import gallery8 from '../images/gallery8.jpeg';
import gallery9 from '../images/gallery9.jpeg';
import gallery10 from '../images/gallery10.jpeg';
import gallery11 from '../images/gallery11.jpeg';
import gallery12 from '../images/gallery12.jpg';
import gallery13 from '../images/gallery13.jpg';

const items = [
  { id: "1", img: gallery1, url: gallery1, height: 400 },
  { id: "2", img: gallery2, url: gallery2, height: 250 },
  { id: "3", img: gallery3, url: gallery3, height: 600 },
  { id: "4", img: gallery4, url: gallery4, height: 300 },
  { id: "5", img: gallery5, url: gallery5, height: 500 },
  { id: "6", img: gallery6, url: gallery6, height: 350 },
  { id: "7", img: gallery7, url: gallery7, height: 450 },
  { id: "8", img: gallery8, url: gallery8, height: 400 },
  { id: "9", img: gallery9, url: gallery9, height: 300 },
  { id: "10", img: gallery10, url: gallery10, height: 500 },
  { id: "11", img: gallery11, url: gallery11, height: 600 },
  { id: "12", img: gallery12, url: gallery12, height: 400 },
  { id: "13", img: gallery13, url: gallery13, height: 450 },
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-[#F7F7F7] min-h-screen py-16 px-4 md:px-20">
      <div className="flex justify-center">
        <SplitText
          text="Gallery"
          className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-10"
          delay={100}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
      </div>

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
    </section>
  );
};

export default Gallery;
