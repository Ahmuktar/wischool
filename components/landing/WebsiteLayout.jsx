import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import React from "react";

const WebsiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
