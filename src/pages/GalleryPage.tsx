import React from "react";
import { motion, cubicBezier } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "../images/contoh.jpg";
import Gallery from "@/components/Gallery";

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

const GalleryPage: React.FC = () => {
  const headingText = "Kedisan";

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        id="hero"
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            variants={fadeSlideIn(0.2, 1.8)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white font-lexend text-sm sm:text-base md:text-xl lg:text-2xl font-light tracking-[8px] sm:tracking-[10px] md:tracking-[16px] uppercase mb-2"
          >
            Explore
          </motion.h2>

          <motion.h1
            className="font-girona font-bold text-[48px] sm:text-[90px] md:text-[120px] lg:text-[150px] xl:text-[186px] leading-none text-transparent bg-clip-text flex justify-center"
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

      {/* GALLERY SECTION */}
      <section className="bg-[#F7F7F7] py-16 sm:py-20 px-4 sm:px-8 md:px-20">
        <div className="relative w-full max-w-screen-2xl mx-auto">
          <Gallery />
        </div>
      </section>

      {/* BUFFER BEFORE FOOTER */}
      <div className="h-12 sm:h-20 lg:h-24" />

      <Footer />
    </>
  );
};

export default GalleryPage;
