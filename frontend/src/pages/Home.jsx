import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import Choose from "../components/Choose";
import Test from "../components/Test";
import Faqs from "../components/Faqs";
import Reliable from "../components/Reliable";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FeaturedProducts />
      <Choose />
      <Test />
      <Faqs />
      <Reliable />
    </div>
  );
};

export default Home;
