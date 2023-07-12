import React from "react";
import Hero from "../../components/homepage-components/hero";
import Freedom from "../../components/homepage-components/freedom";
import Featured from "../../components/homepage-components/featured";
import HowItWorks from "../../components/homepage-components/how-it-works";

const Home = () => {
  return (
    <div>
      <Hero />
      <Freedom />
      <Featured />
      <HowItWorks />
    </div>
  );
};

export default Home;
