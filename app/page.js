import About from "@/components/About";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
