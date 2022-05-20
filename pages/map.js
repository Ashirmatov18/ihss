import React from "react";
import Footer from "../src/components/Footer";
import MainMap from "../src/components/Map/MainMap";
import Navbar from "../src/components/Navbar/Navbar";
import MainLayout from "../src/components/ui/MainLayout";

export default function map() {
  return (
    <MainLayout>
      <main>
        <Navbar />
        <MainMap />
        <Footer />
      </main>
    </MainLayout>
  );
}
