import React from "react";
import Newsishan from "../src/components/News/Newsishan.jsx";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import MainLayout from "../src/components/ui/MainLayout.jsx";

export default function news() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>

      <main>
        <MainLayout>
          <Navbar />
        </MainLayout>
        <Newsishan />
        <MainLayout>
          <Footer />
        </MainLayout>
      </main>
    </>
  );
}
