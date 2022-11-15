import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const MobileNavbarSingle = ({ data }) => {
	const [open, setOpen] = useState(false);
	const handleNavbar = () => setOpen(!open);
	return (
		<div onClick={handleNavbar} className={`lg:hidden border  collapse collapse-plus ${open ? 'collapse-open' : 'collapse-close'}`}>
			<div className="collapse-title text-xl font-medium">
				<p className='capitalize text-gray-900 font-semibold mt-2 ml-5'>{data.category}</p>
			</div>
			<div className="collapse-content">
				{
					data?.routes?.map((route, index) => <div className='flex py-2 justify-between px-3 items-center'>
						<p className='capitalize text-gray-700 font-semibold' key={index}>{route.name} </p>
						<span><ArrowLongRightIcon className='w-4 h-4 text-gray-700 ml-2'></ArrowLongRightIcon></span>
					</div>)
				}
			</div>
		</div>
	);
};

export default MobileNavbarSingle;