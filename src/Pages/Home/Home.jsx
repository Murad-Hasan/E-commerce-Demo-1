import React from "react";
import Blog from "../../components/Blog/Blog";
import Categories from "../../components/Categories/Categories";
import FreeShopping from "../../components/FreeShoppingSection/FreeShopping";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HeroSection from "../../components/HeroSection/HeroSection";
import InstagramShop from "../../components/InstagramShop/InstagramShop";
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
      <GetInTouch/>
      <InstagramShop/>
    </main>
  );
};

export default Home;
