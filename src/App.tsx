import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/reservation" element={<Reservation />} /> */}
      </Routes>
    </>
  );
};

export default App;
