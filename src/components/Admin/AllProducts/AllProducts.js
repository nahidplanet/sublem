
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductSingleRow from './ProductSingleRow';
import axios from '../../axios';
import Loader from '../../Shared/Loader'
import axiosInst from '../../axios';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';




const AllProducts = () => {

	
	const [deleteItem, setDeleteItem] = useState('');

	const [updateItem, setUpdateItem] = useState(null);
	// const [products, setProducts] = useState([]);

	const getFacts = () => {
		const res = axios.get('/product').then((response) => {
			return response
		})
		return res;
	};
	const { data, error, isLoading, refetch } = useQuery('AllProducts', getFacts);

	if (isLoading) {
		// return <Loader></Loader>
	}
	const handleDelete = (item) => {
		setDeleteItem(item)
		// console.log(item);
	}
	const handleUpdate = (item) => {
		setUpdateItem(item)
		console.log("from parent",item);
		
	}
	// const handleDeleteProductById =async () => {
	// console.log("click");
	// await axiosInst.delete(`/product/${deleteItem._id}`).then(res => {
	// 	refetch()
	// 		console.log(res);
	// 	});
	// }


	return (
		<>
			{
				deleteItem && <DeleteModal deleteItem={deleteItem}></DeleteModal>
			}
			{
				updateItem && <UpdateModal updateItem={updateItem} setUpdateItem={setUpdateItem} refetch={refetch}></UpdateModal>
			}
			<div >
				<input  type="checkbox" id="updateProduct" className="modal-toggle" />
				<div className="modal modal-bottom sm:modal-middle">
					<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
						<h3 className="font-bold text-lg">Are you sure to updet !</h3>
						<p className="py-4">Name: updae</p>
						<div className="modal-action">
							<label htmlFor="updateProduct" className="btn bg-red-500 hover:bg-red-600 border-none text-white">Agree!</label>
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
							data?.data?.data.map((item, index) =>
								<ProductSingleRow key={item._id} index={index} item={item} handleUpdate={handleUpdate} handleDelete={handleDelete}></ProductSingleRow>
							)
						}

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