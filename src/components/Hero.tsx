import React from "react";
import heroImage from "../images/contoh.jpg"; 
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-center relative brightness-90"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className="text-white font-lexend text-base md:text-xl lg:text-2xl font-light tracking-[10px] md:tracking-[16px] uppercase mb-2">
          EXPLORE
        </h2>

        {/* KEDISAN */}
        <h1
          className="font-girona font-bold text-[72px] sm:text-[120px] md:text-[150px] lg:text-[186px] leading-none text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(90deg, #ffffff, #eeeeee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(255,255,255,0.6)",
          }}
        >
          Kedisan
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-md md:max-w-xl mt-2 md:mt-4 px-2 md:px-0">
          Discover the beauty of Bali's hidden village with culture, nature, and serenity.
        </p>

        {/* Button */}
        <Button
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              const offset = -50;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = element.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition + offset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }}
          variant="secondary"
          className="font-lexend mt-6 text-sm md:text-base px-6 py-3 rounded-3xl"
        >
          Start Exploring
        </Button>
      </div>
    </section>
  );
};

export default Hero;
