import React from "react";
import heroImage from "../images/contoh.jpg";
import { Button } from "./ui/button";
import { motion, cubicBezier } from "framer-motion";

// Custom easing functions like Anime.js
const easeOutExpo = cubicBezier(0.19, 1, 0.22, 1);
const easeInExpo = cubicBezier(0.61, 1, 0.88, 1);

const headingText = "Kedisan";

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
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 1.1,
      ease: easeInExpo,
    },
  },
};

const fadeSlideIn = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: easeOutExpo },
  },
};

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-cover bg-center relative brightness-90"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h2
          variants={fadeSlideIn}
          initial="initial"
          animate="animate"
          className="text-white font-lexend text-base md:text-xl lg:text-2xl font-light tracking-[10px] md:tracking-[16px] uppercase mb-2"
        >
          EXPLORE
        </motion.h2>

        <motion.h1
          className="ml12 font-girona font-bold text-[72px] sm:text-[120px] md:text-[150px] lg:text-[186px] leading-none text-transparent bg-clip-text flex justify-center"
          style={{
            backgroundImage: "linear-gradient(90deg, #ffffff, #eeeeee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(255,255,255,0.6)",
          }}
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              className="letter inline-block"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeSlideIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-md md:max-w-xl mt-2 md:mt-4 px-2 md:px-0"
        >
          Discover the beauty of Bali's hidden village with culture, nature, and serenity.
        </motion.p>

        <motion.div
          variants={fadeSlideIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
        >
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
            className="mt-6 font-lexend text-sm md:text-base px-6 py-3 rounded-3xl border border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Exploring
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
