import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ReservationPage from "./pages/ReservationPage";
import GalleryPage from "./pages/GalleryPage";

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        {/* Add more routes as needed */}
      </Routes>
  );
};

export default App;
