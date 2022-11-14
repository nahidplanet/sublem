import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';



const Header = () => {
   
    return (
        <div>
            <nav>
                <HeaderTop></HeaderTop>

                <div>
                    <MobileMenu  ></MobileMenu>
                    <MainMenu ></MainMenu>
                </div>

                

                <HeaderBottom></HeaderBottom>
            </nav>
        </div>
    );
};

export default Header;
















