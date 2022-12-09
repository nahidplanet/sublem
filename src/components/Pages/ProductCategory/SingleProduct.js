
import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router';

const SingleProduct = ({ data }) => {
	const navigate = useNavigate();
	const { _id, name, productImage } = data;

	const handleArabicProductDetails = (id) => {
		navigate(`/arabic/${id}`);
	}
	return (
		<div className='p-2'>
			<div className="card rounded-none border text-gray-900 ">
				<figure className='lg:h-[210px]  p-4'>
					<img className='h-full w-[80%] mx-auto' src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt="product_image" />
				</figure>
				<div className="card-body p-2">
					<div className="card-actions m-0  ">
						<p className='py-1 my-1 text-lg'>{name}</p>
						<div className='text-xm md:text-md m-0 p-0 flex justify-between font-semibold w-full'>
							<p className='text-red-700 font-semibold'>4,000 <span>AED</span></p>
							<p className='font-normal'> <del>6,000</del> <span className='font-semibold'>AED</span> </p>
							<p> <span className='text-gray-800 font-bold'>save:</span> 4,000</p>
						</div>
						<div className='text-xm md:text-md flex justify-evenly gap-5  w-full'>
							<button onClick={() => handleArabicProductDetails(_id)} className="mt-0 border hover:bg-slate-100 p-1 rounded-sm w-5/12" >View</button>
							<button className="mt-0 border hover:bg-slate-100 p-1 rounded-sm w-5/12">Add Cart</button>
							<button className=" mt-0  w-2/12">
								<HeartIcon className='text-gray-600 w-6 h-6'></HeartIcon>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;