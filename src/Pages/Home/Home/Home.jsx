import React from 'react';
import HomeCarusel from '../HomeCarusel/HomeCarusel';
import HomeSectionCatalog from '../HomeSectionCatalog/HomeSectionCatalog';
import { mensShirt } from '../../Assets/Mens/MensShirt';
import { womenDress } from '../../Assets/Womens/WomensDress';
import { mensJeans } from '../../Assets/Mens/MensJeans';
import { womenJeans } from '../../Assets/Womens/WomenJeans';
import HomeHeroSection from '../HomeHeroSection/HomeHeroSection';
import HomeDescription from '../HomeDescription/HomeDescription';

const Home = () => {
    const mensItem=mensShirt
    const womenItem=womenDress
    const menJeansItem=mensJeans
    const womenJeansItem=womenJeans
    return (
        <div className='spaxe-y-10 pb-20'>
            <HomeCarusel></HomeCarusel>
            {/* <HomeHeroSection></HomeHeroSection> */}
            <HomeSectionCatalog data={mensItem} title={"Men's Fashion"} subTitle={"Choose your best product"}></HomeSectionCatalog>
            <HomeSectionCatalog data={menJeansItem} title={"Men's Jeans"}  subTitle={"Go with the trend"}></HomeSectionCatalog>
            <HomeSectionCatalog data={womenItem} title={"Women's Fashion"} subTitle={"Choose your best product"}></HomeSectionCatalog>
            <HomeSectionCatalog data={womenJeansItem} title={"Women's Jeans"} subTitle={"Casual jeans"}></HomeSectionCatalog>
            <HomeDescription></HomeDescription>

        </div>
    );
};

export default Home;