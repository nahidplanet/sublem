import React from 'react';
import HomeCategory from './HomeCategory';
import HomeServices from './HomeServices';
import MainSlider from './MainSlider';
import OfficeCategory from './OfficeCategory';
import ProductSlider from './ProductSlider';

const Home = () => {
    return (
        <div>
            <MainSlider></MainSlider>
            <ProductSlider></ProductSlider>
            <HomeCategory></HomeCategory>
            <OfficeCategory></OfficeCategory>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;