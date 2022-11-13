import React, { useEffect, useState } from 'react';
import HeaderBottom from './HeaderBottom';
import HeaderTop from './HeaderTop';
import Logo from "./Logo/Logo"
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import Navbar from './Navbar/Navbar';
import NavbarSecond from './Navbar/NavbarSecond';
import Search from './Search/Search';



const Header = () => {
    const [menu, setMenu] = useState([]);


    const menuData = [
        {
            id: 1,
            category: "furniture",
            details: [
                {
                    id: 1,
                    name: "item-1"
                },
                {
                    id: 2,
                    name: "item-2"
                },
                {
                    id: 3,
                    name: "item-3"
                },
                {
                    id: 4,
                    name: "item-5"
                },
                {
                    id: 5,
                    name: "item-5"
                }
            ]
        },
        {
            id: 2,
            category: "accessories",
            details: [
                {
                    id: 1,
                    name: "item-1"
                },
                {
                    id: 2,
                    name: "item-2"
                },
                {
                    id: 3,
                    name: "item-3"
                },
                {
                    id: 4,
                    name: "item-5"
                },
                {
                    id: 5,
                    name: "item-5"
                }
            ]
        },
        {
            id: 3,
            category: "kids & teen",
            details: [
                {
                    id: 1,
                    name: "item-1"
                },
                {
                    id: 2,
                    name: "item-2"
                },
                {
                    id: 3,
                    name: "item-3"
                },
                {
                    id: 4,
                    name: "item-5"
                },
                {
                    id: 5,
                    name: "item-5"
                }
            ]
        },
        {
            id: 4,
            category: "sale",
            details: [
                {
                    id: 1,
                    name: "item-1"
                },
                {
                    id: 2,
                    name: "item-2"
                },
                {
                    id: 3,
                    name: "item-3"
                },
                {
                    id: 4,
                    name: "item-5"
                },
                {
                    id: 5,
                    name: "item-5"
                }
            ]
        }
    ]

    return (
        <div>
            <nav>
                <HeaderTop></HeaderTop>

                <div>
                    <MobileMenu></MobileMenu>
                    <MainMenu></MainMenu>

                </div>

                

                <HeaderBottom></HeaderBottom>
            </nav>
        </div>
    );
};

export default Header;
















