import React from "react";
import Footer from "../src/components/Footer";
import MainMap from "../src/components/Map/MainMap";
import Navbar from "../src/components/Navbar/Navbar";

export default function map() {
  return (
    <main>
      <Navbar />
      <MainMap />
      <Footer />
    </main>
  );
}
