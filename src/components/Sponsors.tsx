import React from "react";
import { motion, cubicBezier  } from "framer-motion";
import sponsorLogo from "../images/Sponsors.png"; 

// Reuse the same easing curve from your Hero
const easeOutExpo = cubicBezier(0.19, 1, 0.22, 1); 

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    ease: easeOutExpo,
  },
};

const Sponsors: React.FC = () => {
  return (
    <div className="bg-[#F7F7F7] py-16 px-4 md:px-20">
      <motion.h2
        initial={fadeInUp.initial}
        whileInView={fadeInUp.whileInView}
        transition={fadeInUp.transition}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center font-girona text-4xl md:text-5xl font-bold mb-10 text-black"
      >
        Our Partners
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: easeOutExpo }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center"
      >
        <img
          src={sponsorLogo}
          alt="Sponsor Logo"
          className="w-full max-w-[950px] md:max-w-[1100px] h-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Sponsors;
