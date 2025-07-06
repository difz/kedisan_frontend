// src/pages/Home.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Reservation from "../components/Reservation";
import Seemore from "../components/Seemore";
import Footer from "../components/Footer";
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
      <Navbar />
      <ScrollToSectionOnLoad />
      <Hero />
      <About />
      <Reservation mode="simple"/>
      <Seemore />
      <Footer />
    </>
  );
};

export default HomePage;
