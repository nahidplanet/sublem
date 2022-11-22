import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../../Shared/Loader';
import SingleArabicFurniture from '../ArabicFurniture/SingleArabicFurniture';



const ArabicFurniture = () => {
	const { isLoading, error, data } = useQuery(
		['arabicFurniture'], () => axios.get('http://localhost:5000/api/v1/product?category=service')
	)
	if (error) {
		console.log(error);
	}
	if (isLoading) {
		return <Loader></Loader>
	}

	return (
		<div className='min-h-screen'>

			<div>
				<h1 className='capitalize text-3xl text-gray-900 text-center my-5 font-semibold'>Our Service</h1>
				<p className='text-md px-10 text-gray-900 my-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum, ipsum eum expedita rem repudiandae veniam aliquam cumque unde itaque quasi cupiditate fugiat maiores laborum quod voluptatum repellat suscipit! Pariatur dolores necessitatibus totam illum quae aut sint accusamus enim. Eum quo corrupti perspiciatis incidunt officia quas a expedita at maxime!</p>
				<div className="divider"></div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
					{
						data?.data?.map(singleProduct => <SingleArabicFurniture key={singleProduct._id} data={singleProduct}></SingleArabicFurniture>)
					}
				</div>
			</div>
		</div>
	);
};

export default ArabicFurniture;