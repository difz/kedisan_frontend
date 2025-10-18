import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";
import { motion, cubicBezier } from "framer-motion";

// Lazy load hero image
const heroImage = new URL("../images/contoh.jpg", import.meta.url).href;

// Easing functions similar to your Hero section
const easeOutExpo = cubicBezier(0.19, 1, 0.22, 1);
const easeInExpo = cubicBezier(0.61, 1, 0.88, 1);

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.5,
      repeat: Infinity,
      repeatDelay: 1.5,
    },
  },
};

const letterVariants = {
  initial: {
    opacity: 0,
    x: 40,
    textShadow: "0 0 20px #fff, 0 0 30px #6ee7b7, 0 0 40px #6ee7b7",
  },
  animate: {
    opacity: 1,
    x: 0,
    textShadow: "0px 0px 12px rgba(255,255,255,0.8)",
    transition: {
      duration: 1.2,
      ease: easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    textShadow: "0px 0px 0px rgba(255,255,255,0)",
    transition: {
      duration: 1.1,
      ease: easeInExpo,
    },
  },
};

const fadeSlideIn = (delay = 0, duration = 1) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: easeOutExpo,
    },
  },
});

const ReservationPage: React.FC = () => {
  const headingText = "Kedisan";
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section: Top half-screen image with title */}
      <div
      id="hero"
        className="w-full h-[50vh] bg-cover bg-center relative transition-all duration-500"
        style={{
          backgroundImage: imageLoaded ? `url(${heroImage})` : 'none',
          backgroundColor: imageLoaded ? 'transparent' : '#1a1a1a',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            variants={fadeSlideIn(0.2, 1.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white font-lexend text-base md:text-xl lg:text-2xl font-light tracking-[10px] md:tracking-[16px] uppercase mb-2"
          >
            Explore
          </motion.h2>

          <motion.h1
            className="font-girona font-bold text-[72px] sm:text-[120px] md:text-[150px] lg:text-[186px] leading-none text-transparent bg-clip-text flex justify-center"
            style={{
              backgroundImage: "linear-gradient(90deg, #ffffff, #eeeeee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 10px rgba(255,255,255,0.6)",
            }}
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {headingText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>

      {/* Animated "Reservation" Section */}
      <div className="bg-[#F7F7F7] py-20 px-4 md:px-20">
        <Reservation mode="full" />
      </div>

      <Footer />
    </>
  );
};

export default ReservationPage;
