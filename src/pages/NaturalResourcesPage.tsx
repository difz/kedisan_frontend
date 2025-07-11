import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TogaList from "@/components/Toga";
import heroImage from "../images/contoh.jpg"

const NaturalResourcesPage: React.FC = () => {
    return (
    <>
      <Navbar />

      <div
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white font-lexend text-base md:text-xl lg:text-2xl font-light tracking-[10px] md:tracking-[16px] uppercase mb-2">
            Explore
          </h2>

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
        </div>
      </div>

      <div className="bg-[#F7F7F7] min-h-screen pt-16">
       <h1
            className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] 
                mt-16 mb-6 md:mb-8" // <-- added mt-16 to move it down
        >       
            Natural Resources
        </h1>

        <TogaList />
      </div>

      <Footer />
    </>
  );
};

export default NaturalResourcesPage;