import React from "react";
import Categories from "../../components/Categories/Categories";
import FreeShopping from "../../components/FreeShoppingSection/FreeShopping";
import HeroSection from "../../components/HeroSection/HeroSection";
import MenCollection from "../../components/Men'sCollection/MenCollection";
import TopCategory from "../../components/TopCategory/TopCategory";
import WomenCollection from "../../components/WomenCollection/WomenCollection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <MenCollection />
      <WomenCollection />
      <TopCategory />
      <FreeShopping/>
    </>
  );
};

export default Home;
