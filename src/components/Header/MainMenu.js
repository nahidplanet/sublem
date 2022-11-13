import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

const MainMenu = () => {
    return (
        <div className='hidden lg:block h-22 lg:py-2' >
            <div className='flex items-center justify-around h-full bg-white text-black my-2'>
                <div className="w-24 h-auto">
                    <Logo ></Logo>
                </div>
                <Navbar></Navbar>
                <Search></Search>
            </div>
        </div>
    );
};

export default MainMenu;