import React from "react";
import Navbar from "../../src/components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../../src/components/Footer";
import NewsDetail from "../../src/components/News/NewsDetailMoscow.jsx";
import MainLayout from "../../src/components/ui/MainLayout";

export default function NewsDetailPage() {

  return (
    <>
      <Head>
        <title>News</title>
      </Head>
      <MainLayout>
        <main>
          <Navbar />
          <NewsDetail />
          <Footer />
        </main>
      </MainLayout>
    </>
  );
}
