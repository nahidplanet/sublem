import React from 'react';

const DeleteModal = ({deleteItem}) => {
	console.log(deleteItem);
	return (
		<div >
				<input type="checkbox" id="ProductDeleteModal" className="modal-toggle" />
				<div className="modal   modal-bottom sm:modal-middle">
					<div className="modal-box bg-gray-200 text-gray-900 border shadow-lg">
						<h3 className="font-bold text-lg">Are you sure to delete!</h3>
						<p className="py-4">{deleteItem.name} </p>

						<div className='flex gap-10 justify-end items-center'>
							<table>
								<tbody>
									<tr>
										<td>
											<button className='btn bg-red-500  hover:bg-red-600 border-none btn-warning text-white'  >Delete</button>
										</td>
										<td>
											<div className="modal-action ">
												<label htmlFor="ProductDeleteModal" className="btn mt-2 ml-5 bg-green-500 hover:bg-green-600 border-none btn-warning text-white">Cancel!</label>
											</div>
										</td>
									</tr>
								</tbody>
							</table>


						</div>
					</div>
				</div>
			</div>
	);
};

export default DeleteModal;