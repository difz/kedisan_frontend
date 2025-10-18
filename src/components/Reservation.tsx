import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { sanityClient } from "../lib/sanityClient";
import { motion } from "framer-motion";
import SplitText from "@/effect/SplitText";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../lib/imageUrl";

// Lazy load fallback image
const view = new URL("../images/view.png", import.meta.url).href;

interface TourPackage {
  _id: string;
  title: string;
  description: string;
  language?: string | string[];
  duration?: string;
  type?: string;
  price: number;
  link?: string;
  images: { asset: { _ref?: string; _type: string } }[];
}

interface ReservationProps {
  mode?: "full" | "simple";
}

const Reservation: React.FC<ReservationProps> = ({ mode = "full" }) => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#hero") {
      const el = document.getElementById("hero");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }

    async function fetchData() {
      const query = `*[_type == "tourPackage"]{
        _id,
        title,
        description,
        language,
        duration,
        type,
        price,
        link,
        images
      }`;
      const data = await sanityClient.fetch(query);
      setPackages(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#F7F7F7] px-4 md:px-20 py-16">
      {mode === "full" && (
        <div className="w-full flex justify-center">
          <SplitText
            text="Reservation"
            className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8"
            delay={150}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          />
        </div>
      )}

      <div className="grid gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="bg-white rounded-3xl shadow-md px-6 py-6">
              <CardHeader>
                <CardTitle className="font-girona text-2xl sm:text-3xl mb-2">
                  {pkg.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col-reverse md:flex-row gap-6">
                {/* Text Section */}
                <div className="w-full md:w-2/3">
                  {mode === "full" && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.language && (
                        <span className="bg-[#B5BEA4] text-white font-lexend px-3 py-1 rounded-full text-sm">
                          {Array.isArray(pkg.language)
                            ? pkg.language.join(" / ")
                            : pkg.language}
                        </span>
                      )}
                      {pkg.duration && (
                        <span className="bg-[#B5BEA4] text-white font-lexend px-3 py-1 rounded-full text-sm">
                          {pkg.duration}
                        </span>
                      )}
                      {pkg.type && (
                        <span className="bg-[#B5BEA4] text-white font-lexend px-3 py-1 rounded-full text-sm">
                          {pkg.type}
                        </span>
                      )}
                      <span className="bg-[#B5BEA4] text-white font-lexend px-3 py-1 rounded-full text-sm">
                        Rp {pkg.price.toLocaleString("id-ID")}
                      </span>
                    </div>
                  )}

                  <p className="font-lexend text-base md:text-[18px] text-gray-700">
                    {pkg.description}
                  </p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3">
                  {mode === "simple" ? (
                    <div className="w-full overflow-hidden rounded-2xl">
                      <img
                        src={
                          pkg.images?.[0]
                            ? urlFor(pkg.images[0]).width(400).height(400).fit("crop").url()
                            : view
                        }
                        alt={pkg.title}
                        className="w-[300px] h-[300px] mx-auto rounded-3xl"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.images?.slice(0, 4).map((img, i) => (
                        <div
                          key={i}
                          className="w-full aspect-[1/1] overflow-hidden rounded-2xl"
                        >
                          <img
                            src={urlFor(img).url()}
                            alt={`image-${i}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => {
                    if (mode === "simple") {
                      navigate("/reservation#hero");
                    } else if (pkg.link) {
                      window.location.href = pkg.link;
                    } else {
                      console.warn("No WhatsApp link configured for this package");
                    }
                  }}
                  className="bg-black text-white font-lexend text-base px-6 py-3 rounded-full hover:bg-gray-800"
                >
                  {mode === "simple" ? "See More" : "Book Now"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
