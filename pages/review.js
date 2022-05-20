import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import ReviewsVid from "../src/components/Reviews/ReviewsVid";
import MainLayout from "../src/components/ui/MainLayout";

export default function programs() {
  return (
    <div>
      <Head>
        <title>Программы</title>
      </Head>

      <main>
        <MainLayout>
          <Navbar />
        </MainLayout>
        <ReviewsVid />
        <Footer />
      </main>
    </div>
  );
}
