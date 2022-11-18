import React from 'react';

const Role = () => {
	return (
		<div>
			<div className="overflow-x-auto">
			<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl my-5'>Role</h1>
				<table className="table table-zebra w-full">
					{/* <!-- head --> */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
						</tr>
					</thead>
					<tbody>
						{/* <!-- row 1 --> */}
						<tr>
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>Quality Control Specialist</td>
							<td>Blue</td>
						</tr>
						{/* <!-- row 2 --> */}
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>Desktop Support Technician</td>
							<td>Purple</td>
						</tr>
						{/* <!-- row 3 --> */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>Tax Accountant</td>
							<td>Red</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Role;