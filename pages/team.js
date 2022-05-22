import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Team from "../src/components/Team/Team";
import MainLayout from "../src/components/ui/MainLayout";

export default function news() {
  return (
    <>
      <Head>
        <title>Ихсан - О нас</title>
      </Head>
      <MainLayout>
        <main>
          <Navbar />
          <Team />
          <Footer />
        </main>
      </MainLayout>
    </>
  );
}
