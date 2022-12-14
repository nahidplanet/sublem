import React from 'react';
import sliderPhoto from '../../../assets/slider/slider-1.jpg'

const MainSlider = () => {
    
    return (
        <div>
            <div className="carousel w-full h-[425px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={sliderPhoto} alt='slider' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn rounded-lg bg-white text-gray-900 border-none"> ❮</a>
                        <a href="#slide2" className="btn rounded-lg bg-white text-gray-900 border-none"> ❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={sliderPhoto} alt='slider' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn rounded-lg bg-white text-gray-900 border-none"> ❮</a>
                        <a href="#slide3" className="btn rounded-lg bg-white text-gray-900 border-none"> ❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sliderPhoto} alt='slider' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn rounded-lg bg-white text-gray-900 border-none"> ❮</a>
                        <a href="#slide4" className="btn rounded-lg bg-white text-gray-900 border-none"> ❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={sliderPhoto} alt='slider' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn rounded-lg bg-white text-gray-900 border-none"> ❮</a>
                        <a href="#slide1" className="btn rounded-lg bg-white text-gray-900 border-none"> ❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;