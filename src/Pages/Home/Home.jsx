import React from 'react';
import Categories from '../../components/Categories/Categories';
import HeroSection from '../../components/HeroSection/HeroSection';
import MenCollection from '../../components/Men\'sCollection/MenCollection';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Categories/>
            <MenCollection/>
        </>
    );
};

export default Home;