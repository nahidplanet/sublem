import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SingleCart from './SingleCart';
import {  ChevronDownIcon, ChevronRightIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';
import Loader from '../../Shared/Loader';
import { useQuery } from 'react-query';
import axiosInst from '../../axios';

const Cart = () => {
	const [open, setOpen] = useState(false)
	// const [access, setAccess] = useState(false)
	const [products, totalProduct, totalPrice, isLoading, refetch] = useCart()
	const navigate = useNavigate()
	const handleProductIncrease = (id, price) => {
		const addToCartInfo = { productId: id, price }
		fetch('http://localhost:5000/api/v1/product/cart/user', {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(addToCartInfo)
		})
			.then(res => res.json())
			.then(data => {
				if (data.status) {
					toast.success("Product added successful");
					refetch();
				} else {
					toast.error("Product added failed");
				}
			})

	}
	// product increment 
	const handleProductDecrement = (id, price) => {
		const addToCartInfo = { productId: id, price }
		fetch('http://localhost:5000/api/v1/product/cart/user/decrement', {
			method: "POST",
			headers: {
				'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify(addToCartInfo)
		})
			.then(res => res.json())
			.then(data => {
				if (data.status) {
					toast.success("Product added successful");
					refetch();
				} else {
					toast.error("Product added failed");
				}
			})

	}

	const handleCartDeleteItem = async (id) => {
		fetch(`http://localhost:5000/api/v1/product/cart/delete/${id}`, {
			method: 'DELETE',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('accessToken')}`
			},
		}).then(response => response.json())
			.then(data => {
				console.log(data);
				if (!data.status) {
					toast.error("Delete failed")
				} else {
					toast.success("Delete successful");
					refetch();

				}
			})

	}
	const handlePressOrder = () =>{
		navigate('/checkout/details')
		// const cartItems = products?.data?.result?.cartItems;
		// const addressOne = 'bangobandu hall 3008';
		// const orderInfo = {cartItems,addressOne};
		// // console.log(orderInfo);
		// fetch(`http://localhost:5000/api/v1/order`, {
		// 	method: 'POST',
		// 	headers: {
		// 		"content-type": "application/json",
		// 		"authorization": `Bearer ${localStorage.getItem('accessToken')}`
		// 	},
		// 	body:JSON.stringify(orderInfo)
		// }).then(response => response.json())
		// 	.then(data => {
		// 		console.log(data);
		// 		if (!data.status) {
		// 			toast.error("order failed")
		// 		} else {
		// 			toast.success("Order successful");
		// 			// refetch();

		// 		}
		// 	})
	}
	// console.log(products?.data?.result?.cartItems);
	return (
		<div className='min-h-screen'>
			<h1 className='text-gray-900 font-bold capitalize text-4xl my-4 text-center'>My Bag</h1>
			<div className='w-[85%] mx-auto'>
				<div className='border border-black px-3 py-2'>
					<h1 className='text-gray-900 font-semibold capitalize text-lg text-left'>Prices are inclusive of Tax/VAT</h1>
				</div>
				{/* cart page  */}
				<div className='grid grid-cols-1 lg:grid-cols-5 m-2'>
					<div className='col-span-3 m-2'>
						{/* single cart  */}
						
						{products?.data?.result?.cartItems === undefined &&
							<div className='h-full'>
								<div className='border flex flex-col justify-center items-center h-full'>
									<h1 className='text-gray-800 capitalize text-3xl font-bold'>Your Bag is blank</h1>
									<div>
										<Link to={'/'} className='text-gray-800 capitalize text-xl font-semibold flex items-center underline'><span>go to shopping</span> <ShoppingBagIcon className='w-10 h-10 text-green-500' /> </Link>
									</div>
								</div>
							</div>
						}

						{
							products?.data?.result?.cartItems?.map(item => <SingleCart
								key={item?.productId?._id}
								data={item}
								handleCartDeleteItem={handleCartDeleteItem}
								handleProductIncrease={handleProductIncrease}
								handleProductDecrement={handleProductDecrement}
							></SingleCart>)
						}
						
					</div>
					<div className='col-span-2'>
						<div className='border border-gray-300 ml-3 m-2 p-5 pt-2'>
							<h1 className='text-xl text-center text-gray-900 font-bold capitalize mt-2'>cart details</h1>
							<table className='text-gray-800 w-full text-md font-semibold capitalize'>
								<tr className='flex justify-between my-3'>
									<td>total item</td>
									<td>{totalProduct ? totalProduct: "0"}</td>
								</tr>
								<tr className='flex justify-between my-3'>
									<td>Estimated Delivery</td>
									<td>FREE</td>
								</tr>
								<tr className='flex justify-between my-3'>
									<td>Estimated Total</td>
									<td>{totalPrice?totalPrice:'00'} AED</td>
								</tr>
								<tr className='flex justify-between my-3 cursor-pointer'>
									<td className='text-sm mt-2 mb-0' onClick={() => setOpen(!open)}>
										<span>{open ? <ChevronDownIcon className='w-4 h-4 inline '></ChevronDownIcon> : <ChevronRightIcon className='w-4 h-4 inline'></ChevronRightIcon>
										}</span> Got a discount code?</td>
								</tr>
							</table>
							<div className={`${open ? "block" : "hidden"} flex items-center w-full`}>
								<input type="text" placeholder='Please Enter Your Voucher Code' className='p-1 w-full  bg-white text-gray-800 border border-r-0 rounded-l' /> <button className='bg-black ml-[-2px] text-white text-md p-1  my-6 rounded-r'>Apply</button>
							</div>
							<button onClick={handlePressOrder} className='text-white text-center rounded-sm bg-green-600 hover:bg-green-700 w-full px-3 py-2 border border-gray-500 font-bold text-lg block' >Checkout & Pay</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;