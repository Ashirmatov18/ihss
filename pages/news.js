import React from "react";
import Newsishan from "../src/components/News/Newsishan.jsx";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";

export default function news() {
  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <main>
        <Navbar />
        <Newsishan />
        <Footer />
      </main>
    </>
  );
}
