import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Location from "./components/Location";
import Reservation from "./components/Reservation";
import Seemore from "./components/Seemore";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const targetId = location.state.scrollToId;
      const el = document.getElementById(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Reservation />
      <Seemore />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
