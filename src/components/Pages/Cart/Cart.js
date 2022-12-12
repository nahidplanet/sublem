import React from 'react';
import { Link } from 'react-router-dom';
import SingleCart from './SingleCart';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import axiosInst from '../../axios';
import { useQuery } from 'react-query';
import Loader from '../../Shared/Loader';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { CartContext } from '../../../App';

const Cart = () => {
	const [cartItem,setCartItem] = useContext(CartContext);
	const [open, setOpen] = useState(false)

	const { isLoading, data, refetch } = useQuery(
		['cartProduct'], () => axiosInst.get('/product/cart/user/')
			.then(data => data)
	)
	if (isLoading) {
		return <Loader></Loader>
	}
	const totalProduct = data?.data?.result?.cartItems.reduce((x, y) => x + y.quantity, 0);
	setCartItem(totalProduct)
	const totalPrice = data?.data?.result?.cartItems.reduce((x, y) => x + (y.price * y.quantity), 0);


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
	return (
		<div className='min-h-screen'>
			<h1 className='text-gray-900 font-bold capitalize text-4xl my-4 text-center'>My Bag</h1>
			<div className='w-[85%] mx-auto'>
				<div className='border border-black px-3 py-2'>
					<h1 className='text-gray-900 font-semibold capitalize text-lg text-left'>Prices are inclusive of Tax/VAT</h1>
				</div>
				{/* cartpage  */}
				<div className='grid grid-cols-1 lg:grid-cols-5 m-2'>
					<div className='col-span-3 m-2'>
						{/* single cart  */}
						{
							data?.data?.result?.cartItems?.map(item => <SingleCart key={item?.productId?._id} data={item} handleCartDeleteItem={handleCartDeleteItem}></SingleCart>)
						}
					</div>
					<div className='col-span-2'>
						<div className='border border-gray-300 ml-3 m-2 p-5 pt-2'>
							<h1 className='text-xl text-center text-gray-900 font-bold capitalize mt-2'>cart details</h1>
							<table className='text-gray-800 w-full text-md font-semibold capitalize'>
								<tr className='flex justify-between my-3'>
									<td>total item</td>
									<td>{cartItem}</td>
								</tr>
								<tr className='flex justify-between my-3'>
									<td>Estimated Delivery</td>
									<td>FREE</td>
								</tr>
								<tr className='flex justify-between my-3'>
									<td>Estimated Total</td>
									<td>{totalPrice} AED</td>
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
							<Link to="/" className='text-white text-center rounded-sm bg-green-600 hover:bg-green-700 w-full px-3 py-2 border border-gray-500 font-bold text-lg block' >Checkout & Pay</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;