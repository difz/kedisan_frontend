import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { fetchAboutContent } from "../api/fetchAboutContent";
import { urlFor } from "../lib/imageUrl";
import SplitText from "../effect/SplitText";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const [about, setAbout] = useState<{
    content: any[];
    images: any[];
  } | null>(null);

  useEffect(() => {
    fetchAboutContent().then(setAbout);
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <div id="about" className="flex w-full min-h-screen flex-wrap">
      {/* Left Image Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full md:w-1/3 bg-[#9CAF88] flex items-center justify-center p-8 md:p-12 lg:p-16 rounded-r-4xl"
      >
        {about.images?.[0] && (
          <img
            src={urlFor(about.images[0]).width(600).url()}
            alt="About image 1"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        )}
      </motion.div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 bg-white flex flex-col p-8 md:px-16 lg:px-24">
        {/* Text Split stays animated on mount for fancy effect */}
        <SplitText
          text="About"
          className="font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8"
          delay={200}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.3}
          rootMargin="-50px"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-lexend text-gray-700 text-base md:text-lg leading-relaxed prose max-w-none mb-6"
        >
          <PortableText
            value={about.content}
            components={{
            block: {
              normal: ({ children }) => (
                <p className="whitespace-pre-line text-gray-700 text-base md:text-lg font-lexend mb-4">
                    {children}
                </p>
              ),
            },
          }}
        />         
 
        </motion.div>

        {about.images?.[1] && (
          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            src={urlFor(about.images[1]).width(800).url()}
            alt="About image 2"
            className="w-full h-auto object-contain object-bottom rounded-3xl"
          />
        )}
      </div>
    </div>
  );
};

export default About;
