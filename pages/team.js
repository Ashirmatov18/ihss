import React from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../src/components/Footer";
import Team from "../src/components/Team/Team";

export default function news() {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <main>
        <Navbar />
        <Team />
        <Footer />
      </main>
    </>
  );
}
