import React from "react";
import Contacts from "../src/components/Contacts/Contacts";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar/Navbar";

export default function contacts() {
  return (
    <main>
      <Navbar />
      <Contacts />
      <Footer />
    </main>
  );
}
