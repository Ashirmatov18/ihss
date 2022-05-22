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
        <title>Ихсан - Отзывы</title>
      </Head>
      <MainLayout>
        <main>
          <Navbar />
          <ReviewsVid />
          <Footer />
        </main>
      </MainLayout>
    </div>
  );
}
