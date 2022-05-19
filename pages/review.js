import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import ReviewsVid from "../src/components/Reviews/ReviewsVid";

export default function programs() {
  return (
    <div>
      <Head>
        <title>Программы</title>
      </Head>
      <main>
        <Navbar />
        <ReviewsVid />
        <Footer />
      </main>
    </div>
  );
}
