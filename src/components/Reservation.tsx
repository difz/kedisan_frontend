import React, { useEffect, useState } from "react";
import view from "../images/view.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";
import { motion } from "framer-motion";

interface TourPackage {
  _id: string;
  title: string;
  description: string;
  language?: string;
  duration?: string;
  type?: string;
  images: { asset: { url: string } }[];
}

interface ReservationProps {
  mode?: "full" | "simple";
}

const Reservation: React.FC<ReservationProps> = ({ mode = "full" }) => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "tourPackage"]{
        _id,
        title,
        description,
        language,
        duration,
        type,
        images
      }`;
      const data = await sanityClient.fetch(query);
      setPackages(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full left-4 bg-[#F7F7F7] px-4 md:px-20 py-16">
      {mode === "full" && (
        <h1 className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
          Reservation
        </h1>
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
                    </div>
                  )}

                  <p className="font-lexend text-base md:text-[18px] text-gray-700">
                    {pkg.description}
                  </p>
                </div>
                <div className="w-full md:w-1/3">
                  <img
                    src={pkg.images?.[0]?.asset?.url || view}
                    alt={pkg.title}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => navigate(`/tour-packages/${pkg._id}`)}
                  className="bg-black text-white font-lexend text-base px-6 py-3 rounded-full hover:bg-gray-800"
                >
                  Book Now
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
