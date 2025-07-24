import { Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import L from "leaflet";

interface LocationProps {
  location: {
    name: string;
    description: string;
    lat: number;
    lng: number;
  };
}

const HoverableMarker: React.FC<LocationProps> = ({ location }) => {
  const markerRef = useRef<L.Marker>(null);

  return (
    <Marker
      ref={markerRef}
      position={[location.lat, location.lng]}
      eventHandlers={{
        mouseover: () => markerRef.current?.openPopup(),
        mouseout: () => markerRef.current?.closePopup(),
        click: () => {
          const url = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
          window.open(url, "_blank");
        },
      }}
    >
      <Popup closeButton={false} autoClose={false} closeOnClick={false}>
        <strong>{location.name}</strong>
        <br />
        {location.description}
      </Popup>
    </Marker>
  );
};

export default HoverableMarker;
