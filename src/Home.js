import React from "react";
import { Navbar } from "./sections/Navbar";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Preview } from "./sections/Preview";
import { FormSection } from "./sections/FormSection";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Preview />
      <FormSection />
      <Footer />
    </div>
  );
}
