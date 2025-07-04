import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

interface SocialIconProps {
  type: "instagram" | "tiktok" | "whatsapp" | "mail";
  link: string;
  size?: number;
}

const iconMap = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
  mail: FaEnvelope,
};

const hoverStyles: Record<SocialIconProps["type"], string> = {
  instagram: "bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500",
  tiktok: "bg-black",
  whatsapp: "bg-green-500",
  mail: "bg-blue-500",
};

const SocialIcon: React.FC<SocialIconProps> = ({ type, link, size = 25 }) => {
  const Icon = iconMap[type];
  const bgHover = hoverStyles[type];

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-white group transition-all duration-500">
        <Icon
          size={size}
          className="relative z-10 text-gray-900 transition-all duration-500 group-hover:text-white"
        />
        <div
          className={`pointer-events-none absolute top-full left-0 w-full h-full rounded-full ${bgHover} z-0 transition-all duration-500 group-hover:top-0`}
        />
      </button>
    </a>
  );
};

export default SocialIcon;
