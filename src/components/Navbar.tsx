import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (targetId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      // Redirect to home with state
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
        <ul className="hidden md:flex gap-15 font-bold text-l font-Lexend text-gray">
          <li>
            <button onClick={() => handleNavigation("hero")} className="hover:underline cursor-pointer">
              Home
            </button>
          </li>
          <li>
            <a href="#natural-heritage" className="hover:underline">
              Natural Heritage
            </a>
          </li>
          <li>
            <a href="#reservation" className="hover:underline">
              Reservation
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:underline">
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
