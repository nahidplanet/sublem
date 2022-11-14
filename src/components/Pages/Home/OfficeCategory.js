import React from 'react';
import bed from '../../../assets/category/home/room-shop.jpg';
import sofa from '../../../assets/category/home/sofa.jpg';
import mattress from '../../../assets/category/home/mattress.jpg';
import carpet from '../../../assets/category/home/carpet.jpeg';
import { Link } from 'react-router-dom';

const OfficeCategory = () => {


	return (
		<div className='my-20'>
			<div className="flex flex-col items-center mx-auto w-11/12">
				<h1 className="text-2xl font-semibold text-gray-900 capitalize ">Shop by Office</h1>
				<div className="divider mx-0 h-[1px] bg-gray-400 font-bold"></div>
			</div>
			<div className="grid grid-cols-3 w-full p-8 gap-4">
				<div className="col-span-3 ">
					<Link to={'/'}>
						<div className="">
							<div className="card h-full  shadow-xl image-full">
								<figure><img className=' w-full h-full' src={bed} alt="room-category" /></figure>
								<div className="card-body ">
									<h2 className="card-title capitalize">bed</h2>
								</div>
							</div>
						</div>
					</Link>
				</div>
				<div className="">
					<Link to={'/'}>
						<div className="card h-[200px]  shadow-xl image-full">
							<figure><img className=' w-full h-full' src={sofa} alt="room-category" /></figure>
							<div className="card-body ">
								<h2 className="card-title capitalize">sofa</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className="">
					<Link to={'/'}>
						<div className="card h-[200px]  shadow-xl image-full">
							<figure><img className=' w-full h-full' src={mattress} alt="room-category" /></figure>
							<div className="card-body ">
								<h2 className="card-title capitalize">mattress</h2>
							</div>
						</div>
					</Link>
				</div>
				<div className="">
					<Link to={'/'}>
						<div className="card h-[200px]  shadow-xl image-full">
							<figure><img className=' w-full h-full' src={carpet} alt="room-category" /></figure>
							<div className="card-body ">
								<h2 className="card-title capitalize">carpet</h2>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default OfficeCategory;