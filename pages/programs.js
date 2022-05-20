import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Programs from "../src/components/Programs/Programs.jsx";
import MainLayout from "../src/components/ui/MainLayout";

export default function programs() {
  return (
    <div>
      <Head>
        <title>Программы</title>
      </Head>
      <MainLayout>
        <main>
          <Navbar />
          <Programs />
          <Footer />
        </main>
      </MainLayout>
    </div>
  );
}
