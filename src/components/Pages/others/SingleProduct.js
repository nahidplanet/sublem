import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import "./SingleProduct.css";
import ProductSlider from '../Home/ProductSlider';
import Slider from "react-slick";

import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loader from '../../Shared/Loader';
// import settings from './config';

const SingleProduct = () => {

	var baseUrl = `http://localhost:5000/images/product/`;
	const { id } = useParams();
	const { isLoading, error, data } = useQuery(
		['singleProduct'], () => axios.get(`http://localhost:5000/api/v1/product/${id}`)
			.then(data => data)
	)
	if (isLoading) {
		return <Loader></Loader>
	}
	const { name, productImage, code, sortDescription, longDescription, regularPrice, newPrice } = data?.data?.data[0];
	const image = productImage[0]?.productImagePath;

	const settings = {
		customPaging: function(i) {
		  return (
			<a>
			  <img src={`${baseUrl} ${image} ${i + 1}.jpg`} />
			</a>
		  );
		},
		dots: true,
		dotsClass: "slick-dots slick-thumb",
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	return (
		<>
			<div className='min-h-screen '>
				<div className='h-10 flex items-center mx-10 capitalize text-md font-semibold text-gray-900 border-b'>
					<span >home/ product/ single-Product</span>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-5 w-full mt-10 lg:px-14 px-6 '>
					<div className='col-span-3 border h-full'>
						<div className='m-10 border lg:h-[370px] lg:w-[660px]'>
							{/* <img className='w-full h-full' src={`http://localhost:5000/images/product/${image}`} alt={name} /> */}
							<img src={baseUrl + image} alt={"product_images"}/>
						</div>
						<div className="h-[200px] overflow-hidden">
							{/* <ProductSlider></ProductSlider> */}
							<Slider {...settings}>
								{
									productImage.map(imgPath => <div>
										<img src={baseUrl + image} alt={"product_images"} />
									</div>
									)
								}
								
							</Slider>
							{/* <ProductSlider></ProductSlider> */}
						</div>
					</div>
					<div className='col-span-2 text-center text-gray-900 my-5 lg:p-10'>
						<div>
							<h1 className='font-semibold text-xl capitalize'>{name}</h1>
							<h1 className='font-bold my-2 flex justify-around px-14'>
								<span className='text-red-600'>{newPrice} AED</span>
								<del className='text-gray-600'>{regularPrice}AED </del>
								<span>Save {parseInt(regularPrice) - parseInt(newPrice)}AED</span>
							</h1>
							<p className='text-lg my-2'>Code: {code}</p>
							<p> {sortDescription}</p>
							<p className='mt-5 text-lg font-semibold'>Prices are inclusive of Tax/VAT</p>
							<p className=' text-lg font-semibold'>Delivery Within 48 hours*</p>
							<div className='mt-5'>
								<h1 className='text-2xl font-semibold text-green-600 '>2 In Stock Now</h1>
								<div>
									<div className='flex justify-center items-center my-3'>
										<button className='border gb-gray-600 w-10 h-10 rounded-md text-white font-bold bg-gray-500'>-</button>
										<input className='w-14 h-8 mx-4 px-2 py-1 bg-white border border-gray-900 rounded-sm font-bold' type="number" name="" id="incriecInput" />
										<button className='border gb-gray-600 w-10 h-10 rounded-md text-white font-bold bg-gray-500'>+</button>
									</div>
									<button className='block mx-auto my-10 rounded-md hover:bg-green-700 bg-green-500 w-7/12 py-4 text-lg text-black capitalize font-bold text-center'>add to cart</button>
									<div className='w-full'>
										<button className='flex items-center mx-auto text-green-600 underline font-normal px-3 py-2 text-xl'>
											<HeartIcon className='w-6 h-6 mr-3 ' />Add to wishlist
										</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='m-10 p-6 border shadow-md bg-slate-200'>
					<div className='p-10 text-black '>
						{longDescription}
					</div>
				</div>
				<div className='h-18'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem?
				</div>
			</div>
		</>
	);
};

export default SingleProduct;