import React from 'react';
const ProductSingleRow = ({productHandler,data,index}) => {
	return (
		<tr>
			<td><p>{1+index++ }</p></td>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img  src={`http://localhost:5000/images/product/${data.productImage[0].productImagePath}`} alt={data.name}/>
						</div>
					</div>
				</div>
			</td>
			<td>
				<p>{data?.name}</p>
				{/* <span className="badge badge-ghost badge-sm">name</span> */}
			</td>
			<td>{data?._id}</td>
			<td>{data?.code}</td>
			<td>{data?.price}</td>
			<th className=''>
				<button className="btn btn-ghost btn-xs bg-blue-400 mr-3">update</button>
				<label onClick={()=>productHandler(data._id)} htmlFor="ProductDeleteModal"  className="btn btn-ghost btn-xs bg-red-500">delete</label>
			</th>
		</tr>
	);
};

export default ProductSingleRow;