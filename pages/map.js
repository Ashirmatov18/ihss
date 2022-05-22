import React from "react";
import Footer from "../src/components/Footer";
import MainMap from "../src/components/Map/MainMap";
import Navbar from "../src/components/Navbar/Navbar";
import MainLayout from "../src/components/ui/MainLayout";
import Head from "next/head";

export default function map() {
  return (
    <MainLayout>
      <main>
        <Head>
          <title>Ихсан - Филиалы</title>
        </Head>
        <Navbar />
        <MainMap />
        <Footer />
      </main>
    </MainLayout>
  );
}
