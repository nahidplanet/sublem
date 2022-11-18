import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';


const Developer = () => {
	const dashBoardMenuData = [
		{
			id: 1,
			path: "add-product",
			name: "Add Product"
		},
		{
			id: 2,
			path: "all-product",
			name: "All Product"
		},
		{
			id: 3,
			path: "orders",
			name: "Orders"
		},
		{
			id: 4,
			path: "delivered",
			name: "Delivered"
		},
		{
			id: 5,
			path: "role",
			name: "Role"
		},
	]
	return (
		<>
			{/* <Header></Header> */}
			<div className="drawer ">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* <!-- Navbar --> */}
					<div className="w-full navbar border-b-2">
						<div className="flex-none text-gray-900 lg:hidden">
							<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
							</label>
						</div>
						<div className="flex-1 px-2 mx-2 text-gray-900">
							<Link to={"/developer"}>Home</Link>
						</div>
						<div className="flex-none hidden lg:block">
							<ul className="menu menu-horizontal">
								{
									dashBoardMenuData.map(route => <li className='text-gray-900 font-semibold' key={route.id}><Link to={route.path}> {route.name} </Link> </li>)
								}
							</ul>
						</div>
					</div>
					{/* <!-- Page content here --> */}
					<div className=" px-14 py-10">
						<Outlet></Outlet>
					</div>
				</div>
				<div className="drawer-side ">
					<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
					<ul className="menu p-4 w-60 bg-gray-700 ">
						{
							dashBoardMenuData.map(route => <li className='text-white hover:bg-gray-400' key={route.id}><Link to={route.path}> {route.name} </Link> </li>)
						}
					</ul>

				</div>
			</div>
		</>
	);
};

export default Developer;