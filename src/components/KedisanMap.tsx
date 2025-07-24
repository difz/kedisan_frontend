import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import HoverableMarker from "./ui/hoverableMarker";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { sanityClient } from "../lib/sanityClient";

// Fix Leaflet icon issue with Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

interface LocationData {
  _id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
}

const KedisanMap = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "touristAttraction"]{
        _id,
        title,
        description,
        latitude,
        longitude
      }`;

      const data = await sanityClient.fetch(query);
      setLocations(data);
    };

    fetchData();
  }, []);

  return (
    <motion.section
      id="map"
      className="px-4 py-8 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="font-girona font-bold text-center text-black text-5xl sm:text-6xl md:text-7xl lg:text-[100px] mb-6 md:mb-8">
        Kedisan Maps
      </h2>

      <div className="max-w-6xl mx-auto">
        <MapContainer
          center={[-8.425753421877205, 115.29090451453762]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%", borderRadius: "12px" }}
        >
          <TileLayer
            url={`https://api.maptiler.com/maps/outdoor-v2/{z}/{x}/{y}@2x.png?key=NNoN72LylGcnFYBP5dmc`}
            attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors'
          />

          {locations.map((loc) => (
            <HoverableMarker
              key={loc._id}
              location={{
                name: loc.title,
                description: loc.description || "Click for Guide",
                lat: loc.latitude,
                lng: loc.longitude,
              }}
            />
          ))}
        </MapContainer>
      </div>
    </motion.section>
  );
};

export default KedisanMap;
