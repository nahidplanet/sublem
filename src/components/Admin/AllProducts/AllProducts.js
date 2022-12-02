
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductSingleRow from './ProductSingleRow';
import axios from '../../axios';
import Loader from '../../Shared/Loader'




const AllProducts = () => {

	const [modalData, setModalData] = useState(null);
	// const [products, setProducts] = useState([]);

	const getFacts = () => {
		const res = axios.get('/product').then((response) => {
			return response
		})
		return res;
	};
	const { data, error, isLoading } = useQuery('AllProducts', getFacts);
	if (isLoading) {
		return <Loader></Loader>
	}
	const productHandler = (data) => {
		setModalData(data);
	}
	return (
		<>
			<div >
				<input type="checkbox" id="ProductDeleteModal" className="modal-toggle" />
				<div className="modal   modal-bottom sm:modal-middle">
					<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
						<h3 className="font-bold text-lg">Are you sure to delete!</h3>
						<p className="py-4">Name: {modalData}</p>
						<div className="modal-action">
							<label htmlFor="ProductDeleteModal" className="btn bg-red-500 hover:bg-red-600 border-none text-white">Agree!</label>
						</div>
					</div>
				</div>
			</div>
			<div className="overflow-x-auto w-full ">
				<table className="table w-full ">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th>
								Number
							</th>
							<th>Image</th>
							<th>Name</th>
							<th>ID</th>
							<th>Code</th>
							<th>Price</th>
							<th>action</th>
						</tr>
					</thead>
					<tbody className=' text-white'>
						{
							data?.data?.data.map((row,index) =>
								<ProductSingleRow key={row._id} index={index} data={row} productHandler={productHandler}></ProductSingleRow>
						)}
					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			<div className='flex justify-end'>
				<div className=" flex items-center justify-center">
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">1</button>
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">2</button>
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">3</button>
					<button className=" bg-gray-600 text-white border-r py-2 px-3 font-bold text-sm  cursor-pointer ">4</button>
				</div>
			</div>
		</>
	);
};

export default AllProducts;