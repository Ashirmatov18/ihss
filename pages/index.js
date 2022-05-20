import Head from "next/head";
import * as React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Opportunity from "../src/Opportunity/Opportunity.jsx";
import Calculator from "../src/components/Calculator";
import Residential from "../src/components/Residential";
import Review from "../src/components/Review";
import News from "../src/components/News";
import Questions from "../src/components/Questions";
import Footer from "../src/components/Footer";
import MainMap from "../src/components/Map/MainMap";
import MainLayout from "../src/components/ui/MainLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <MainLayout>
          <Navbar />
          <Opportunity />
          <Calculator />
          <Residential />
          <Review />
          <News />
          <MainMap />
          <Questions />
          <Footer />
        </MainLayout>
      </main>
    </>
  );
}
