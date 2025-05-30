import React from "react";
import heroImage from "../images/contoh.jpg"; // Adjust the path as necessary
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-white font-lexend text-[28px] font-light leading-[28.875px] tracking-[21px] uperrcase">EXPLORE</h2>
        <h1 className="font-girona font-bold text-[186.72px] leading-none text-transparent bg-clip-text" 
        style={{
            backgroundImage: "linear-gradient(90deg, #ffffff, #eeeeee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent", 
            textShadow: "0 0 10px rgba(255,255,255,0.6)",
        }}
        >Kedisan</h1>
        <p className="text-lg md:text-2xl max-w-xl">
          Discover the beauty of Bali's hidden village with culture, nature, and serenity.
        </p>

        <Button variant="secondary" className="font-lexend mt-4 text-base px-6 py-3 rounded-lg" >Start Exploring</Button>
      </div>
    </section>
    
  );
};

export default Hero;
