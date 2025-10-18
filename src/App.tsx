import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import GalleryPage from "./pages/GalleryPage";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;
