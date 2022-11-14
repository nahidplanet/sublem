
import React, { useEffect, useState } from 'react';
import MobileNavbarSingle from './MobileNavbarSingle';

const MobileNavbar = () => {
	const [menuData, setMenuData] = useState([]);
	useEffect(() => {
		fetch("menuData.json")
			.then(res => res.json())
			.then(data => setMenuData(data))
	}, [])
	
	return (
		<>
			{
				menuData.map(data => <MobileNavbarSingle key={data.id} data={data} ></MobileNavbarSingle>)
			}
		</>

	);
};

export default MobileNavbar;