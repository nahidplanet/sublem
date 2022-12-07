import React from 'react';
import { useQuery } from 'react-query';
import Header from '../../Header/Header';
import Loader from '../../Shared/Loader';
import SingleArabicFurniture from './SingleArabicFurniture';
import axiosInst from '../../axios'
import Footer from '../../Footer/Footer'


const ArabicFurniture = () => {

	const getFacts = () => {
		const res = axiosInst.get('/product').then((res) => res)
		return res;
	};
	const { data, isLoading } = useQuery('arabicProduct', getFacts);

	if (isLoading) {
		return <Loader></Loader>
	}
	return (
		<div className='min-h-screen'>
		<Header></Header>
			<div className=''>
				<h1 className='capitalize text-3xl text-gray-900 text-center my-5 font-semibold'>Arabic Furniture</h1>
				<p className='text-md px-10 text-gray-900 my-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum, ipsum eum expedita rem repudiandae veniam aliquam cumque unde itaque quasi cupiditate fugiat maiores laborum quod voluptatum repellat suscipit! Pariatur dolores necessitatibus totam illum quae aut sint accusamus enim. Eum quo corrupti perspiciatis incidunt officia quas a expedita at maxime!</p>
				<div className="divider"></div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
					{
						data?.data?.data?.map( singleProduct => <SingleArabicFurniture key={singleProduct._id} data={singleProduct}></SingleArabicFurniture>)
					}
				</div>
				<div className='pagination my-20'>
					<div className=''>
						<ul className='flex gap-3 justify-center items-center m-0 p-0'>
							<li className='style-none border px-3 py-2 text-gray-900 hover:bg-gray-200 cursor-pointer'>1</li>
							<li className='style-none border px-3 py-2 text-gray-900 hover:bg-gray-200 cursor-pointer'>2</li>
							<li className='style-none border px-3 py-2 text-gray-900 hover:bg-gray-200 cursor-pointer'>3</li>
							<li className='style-none border px-3 py-2 text-gray-900 hover:bg-gray-200 cursor-pointer'>4</li>
							<li className='style-none border px-3 py-2 text-gray-900 hover:bg-gray-200 cursor-pointer'>5</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default ArabicFurniture;