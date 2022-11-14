import React, { useEffect, useState } from 'react';
import Logo from './Logo/Logo';
import MainNavbar from './Navbar/MainNavbar';
import Search from './Search/Search';

const MainMenu = () => {
    const [menuData, setMenuData] = useState([]);
	useEffect(() => {
		fetch("menuData.json")
			.then(res => res.json())
			.then(data => setMenuData(data))
	}, [])
    return (
        <div className='hidden lg:block h-22 lg:py-2' >
            <div className='flex items-center justify-around h-full bg-white text-black my-2'>
                <div className="w-24 h-auto">
                    <Logo ></Logo>
                </div>
                <div className='flex gap-5'>
                    {menuData.map(data=><MainNavbar key={data.id} data={data}></MainNavbar>)}
                </div>
                
                <Search></Search>
            </div>
        </div>
    );
};

export default MainMenu;