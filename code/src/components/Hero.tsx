import React from "react";
import heroImage from "../images/contoh.jpg"; 
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    
    <section
      className="w-full h-screen bg-cover bg-center relative brightness-90"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      
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

        <Button 
        onClick={() => {
              const element = document.getElementById('about');
    if (element) {
      const offset = -50; // scroll 100px higher (adjust as needed)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }}
    //      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
       // }} 
        variant="secondary" className="font-lexend mt-4 text-base px-6 py-3 rounded-4xl" >Start Exploring</Button>
      </div>
    </section>
    
  );
};

export default Hero;
