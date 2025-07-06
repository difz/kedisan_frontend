import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";
import heroImage from "../images/contoh.jpg";

const ReservationPage: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section: Top half-screen image with title */}
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

      {/* Main Reservation Section */}
      <div className="bg-[#F7F7F7]">
        <Reservation mode="full" />
      </div>

      <Footer />
    </>
  );
};

export default ReservationPage;
