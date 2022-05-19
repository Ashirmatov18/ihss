import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import NewsDetail from "../src/components/News/NewsDetailTalas.jsx";

export default function news() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <main>
        <Navbar />
        <NewsDetail />
        <Footer />
      </main>
    </>
  );
}
