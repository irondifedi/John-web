import React from "react";
import JohnHero from "../components/JohnHero";
import JohnCategory from "../components/JohnCategory";
import JohnFaq from "../components/JohnFaq";
import JohnTrusted from "../components/JohnTrusted";
import JohnCantFind from "../components/JohnCantFind";

const JohnStores = () => {
  return (
    <div>
      <JohnHero />
      <JohnCategory />
      <JohnTrusted />
      <JohnFaq />
      <JohnCantFind />
    </div>
  );
};

export default JohnStores;
