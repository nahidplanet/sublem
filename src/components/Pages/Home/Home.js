import React from 'react';
import MobileNavbar from '../../Header/Navbar/MobileNavbar';
import HomeCategory from './HomeCategory';
import HomeServices from './HomeServices';
import MainSlider from './MainSlider';
import OfficeCategory from './OfficeCategory';
import ProductSlider from './ProductSlider';

const Home = () => {
    return (
        <div>
            <MainSlider></MainSlider>
            {/* <FeaturedProduct className="bg-white"></FeaturedProduct> */}


            <ProductSlider></ProductSlider>
            <MobileNavbar></MobileNavbar>
            <HomeCategory></HomeCategory>
            <OfficeCategory></OfficeCategory>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;