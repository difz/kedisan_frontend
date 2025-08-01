import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (targetId: string) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToId: targetId } });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 transition-colors duration-300 ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-center items-center max-w-screen-xl mx-auto">
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-15 font-bold text-l font-Lexend text-gray">
          <li>
            <button
              onClick={() => handleNavigation("hero")}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
          </li>
          {/* <li>
            
            <button 
            onClick={() => navigate("/natural-resources")}
            
            className="hover:underline cursor-pointer"
            >
              Natural Resources
            </button>
          </li> */}
          <li>
            <button 
            onClick={()=> navigate("/reservation")}
            className="hover:underline cursor-pointer"
            >
              Reservation
            </button>
          </li>
          <li>
            <button 
            onClick={()=> navigate("/gallery")}
            className="hover:underline cursor-pointer"
            >
              Gallery
            </button>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <div className="md:hidden absolute right-8 top-4 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile menu content */}
        {menuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white text-black flex flex-col items-center justify-center gap-10 font-Lexend text-xl z-40">
          <li>
            <button
              onClick={() => handleNavigation("hero")}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button 
            onClick={()=> navigate("/reservation")}
            className="hover:underline cursor-pointer"
            >
              Reservation
            </button>
          </li>
          <li>
            <a href="#gallery" className="hover:underline cursor-pointer">
              Gallery
            </a>
          </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
