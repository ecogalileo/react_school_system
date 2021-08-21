import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";
import HomeNavbar from "../components/HomeNavbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <Hero />
      <Content />
      <Footer />
    </>
  );
};

export default Home;
