// src/pages/Home.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Reservation from "../components/Reservation";
import Seemore from "../components/Seemore";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import ClickSpark from "../effect/clickspark"; 
import KedisanMap from  "../components/KedisanMap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSectionOnLoad = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
};

const HomePage: React.FC = () => {
    
  return (
    <>
    <ClickSpark
      sparkColor="#800000"
      sparkSize={8}
      sparkRadius={30}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <Navbar />
      <ScrollToSectionOnLoad />
      <Hero />
      <About />
      <KedisanMap />
      <Reservation mode="simple"/>
      <Seemore />
      <Sponsors />
      <Footer />
       </ClickSpark>  
    </>
  );
};

export default HomePage;
