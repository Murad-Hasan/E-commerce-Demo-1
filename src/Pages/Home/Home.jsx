import React from "react";
import Blog from "../../components/Blog/Blog";
import Categories from "../../components/Categories/Categories";
import FreeShopping from "../../components/FreeShoppingSection/FreeShopping";
import HeroSection from "../../components/HeroSection/HeroSection";
import MenCollection from "../../components/Men'sCollection/MenCollection";
import TopCategory from "../../components/TopCategory/TopCategory";
import WomenCollection from "../../components/WomenCollection/WomenCollection";

const Home = () => {
  return (
    <main className='bg-gray-100'>
      <HeroSection />
      <Categories />
      <MenCollection />
      <WomenCollection />
      <TopCategory />
      <FreeShopping/>
      <Blog/>
    </main>
  );
};

export default Home;
