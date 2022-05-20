import React from "react";
import Contacts from "../src/components/Contacts/Contacts";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import MainLayout from "../src/components/ui/MainLayout";

export default function contacts() {
  return (
    <MainLayout>
      <main>
        <Navbar />
        <Contacts />
        <Footer />
      </main>
    </MainLayout>
  );
}
