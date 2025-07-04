import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { fetchAboutContent } from "../api/fetchAboutContent";
import { urlFor } from "../lib/imageUrl";

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
      <div className="w-full md:w-1/3 bg-[#9CAF88] flex items-center justify-center p-8 md:p-12 lg:p-16 rounded-xl">
        {about.images?.[0] && (
          <img
            src={urlFor(about.images[0]).width(600).url()}
            alt="About image 1"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        )}
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 bg-white flex flex-col p-8 md:px-16 lg:px-24">
        <h1 className="font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
          About
        </h1>

        <div className="font-lexend text-gray-700 text-base md:text-lg leading-relaxed prose max-w-none mb-6">
          <PortableText value={about.content} />
        </div>

        {about.images?.[1] && (
          <img
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
