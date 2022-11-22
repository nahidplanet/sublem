import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Categories from './Categories';
import MainSlider from './MainSlider';
import ProductSlider from './ProductSlider';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <MainSlider></MainSlider>
            <ProductSlider></ProductSlider>
            <Categories></Categories> 
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;