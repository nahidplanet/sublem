
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ProductSingleRow from './ProductSingleRow';
import axios from '../../axios';
import Loader from '../../Shared/Loader';
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';
import ReactPaginate from 'react-paginate';
import './AllProducts.css'



const AllProducts = () => {


	const [deleteItem, setDeleteItem] = useState(null);
	const [updateItem, setUpdateItem] = useState(null);

	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const getFacts = () => {
		const res = axios.get(`/product?limit=${limit}&page=${page}`).then((response) => {
			return response
		})
		return res;
	};
	const { data, isLoading, refetch } = useQuery(['AllProducts',limit,page], getFacts);
	if (isLoading) {
		return <Loader></Loader>
	}
	const handleDelete = (item) => {
		setDeleteItem(item)
	}
	const handleUpdate = (item) => {
		setUpdateItem(item)

	}
	const handlePageClick = (data) => {
		setPage(data.selected +1);

	}

	return (
		<>
			{
				deleteItem && <DeleteModal deleteItem={deleteItem} setDeleteItem={setDeleteItem} refetch={refetch}></DeleteModal>
			}
			{
				updateItem && <UpdateModal updateItem={updateItem} setUpdateItem={setUpdateItem} refetch={refetch}></UpdateModal>
			}
			<div >
				<input type="checkbox" id="updateProduct" className="modal-toggle" />
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
							<th>Category</th>
							<th>type</th>
							<th>Code</th>
							<th>Price</th>
							<th>Action</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody className=' text-white'>
						{
							data?.data?.data?.products?.map((item, index) =>
								<ProductSingleRow key={item._id} page={page} limit={limit} index={index} item={item} handleUpdate={handleUpdate} handleDelete={handleDelete}></ProductSingleRow>
							)
						}

					</tbody>
					{/* <!-- foot --> */}
					<tfoot className='bg-gray-800'>
					</tfoot>
				</table>
			</div>
			<div className='flex justify-end mt-5'>
				<div className="flex items-center justify-center  h-6">
					<ReactPaginate
						breakLabel="..."
						nextLabel="next >"
						onPageChange={handlePageClick}
						pageRangeDisplayed={3}
						pageCount={data?.data?.data?.totalPage}
						previousLabel="< previous"
						marginPagesDisplayed={2}
						// renderOnZeroPageCount={null}
						activeLinkClassName="active"
						previousLinkClassName="page-num"
						nextLinkClassName="page-num"
						containerClassName="pagination"
						pageLinkClassName='page-num'
					/>
					<select onChange={(e)=>setLimit(e.target.value)}
							className="px-2 py-2 text-gray-700 bg-transparent rounded-none cursor-pointer">
							<option selected value="10">10</option>
							<option value="15">15</option>
							<option value="25">25</option>
							<option value="50">50</option>
						</select>
				</div>
			</div>
		</>
	);
};

export default AllProducts;