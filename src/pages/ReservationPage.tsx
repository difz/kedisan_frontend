import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reservation from "@/components/Reservation";

const ReservationPage: React.FC = () => {
  return (
    <>
    <Navbar />
    <div>

      <Reservation mode="full" />

    </div>
    
    
    <Footer />
    </>
    
  );
};

export default ReservationPage;
