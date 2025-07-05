import React, { useEffect, useState } from "react";
import view from "../images/view.png";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { sanityClient } from "../lib/sanityClient";

interface TourPackage {
  _id: string;
  title: string;
  description: string;
  images: { asset: { url: string } }[];
}

const Reservation: React.FC = () => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "tourPackage"]{
        _id,
        title,
        description,
        images
      }`;
      const data = await sanityClient.fetch(query);
      setPackages(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#F7F7F7] px-4 md:px-20 py-16">
      <h1 className="text-center font-girona font-bold text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
        Reservation
      </h1>
      <div className="grid gap-8">
        {packages.map((pkg) => (
          <Card key={pkg._id}>
            <CardHeader>
              <CardTitle className="font-girona text-3xl md:text-[50px]">{pkg.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col-reverse md:flex-row gap-6">
              <div className="w-full md:w-2/3">
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
                className="font-lexend text-base px-6 py-3 rounded-4xl"
              >
                Book Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
