import React, { useState } from 'react';

const MobileNavbarSingle = ({ data }) => {
	const [open, setOpen] = useState(false);
	const handleNavbar = () => setOpen(!open);
	return (
		<div onClick={handleNavbar} className={` lg:hidden border px-20 collapse collapse-plus ${open ? 'collapse-open' : 'collapse-close'}`}>
			<div className="collapse-title text-xl font-medium">
				{data.category}
			</div>
			<div className="collapse-content">
				{
					data?.routes?.map((route, index) => <p key={index}>{route.name}</p>)
				}
			</div>
		</div>
	);
};

export default MobileNavbarSingle;