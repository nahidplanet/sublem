import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const SingUp = () => {
	return (
		<div className='flex bg-gray-50 justify-center items-center  w-full min-h-screen lg:p-20'>
			<div className='bg-white lg:w-10/12 md:10/12 w-10/12 rounded-lg shadow-sm border px-5 py-3' >
				<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl mb-5'>Sing Up</h1>
				<form action="" method="get" className='w-full'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-around'>
						<div className=' w-full' >
							<div className='flex flex-col justify-center'>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your name</span>
									</label>
									<input type="text" placeholder="Full Name" className="bg-white input input-bordered max-w-sm text-gray-800" />
									<label className="label">
										<span className="label-text-alt capitalize text-red-600">password wrong!</span>
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your email</span>
									</label>
									<input type="text" placeholder="Your Email" className="bg-white input input-bordered max-w-sm text-gray-800" />
									<label className="label">
										<span className="label-text-alt capitalize text-red-600">password wrong!</span>
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your password</span>
									</label>
									<input type="password" placeholder="********" className="bg-white input input-bordered max-w-sm text-gray-800" />
									<label className="label">
										<span className="label-text-alt capitalize text-red-600">password wrong!</span>
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">contact number</span>
									</label>
									<input type="number" placeholder="Contact Number" className="bg-white input input-bordered max-w-sm text-gray-800" />
									<label className="label">
										<span className="label-text-alt capitalize text-red-600">password wrong!</span>
									</label>
								</div>
							</div>
						</div>
						{/* right side  */}
						<div className=' w-full'>
							<div className='flex flex-col justify-center'>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your address 1</span>
									</label>
									<input type="text" placeholder="Your Address" className="bg-white input input-bordered max-w-sm text-gray-800" />
									<label className="label">
										<span className="label-text-alt capitalize text-red-600">password wrong!</span>
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your address 2</span>
									</label>
									<input type="text" placeholder="Your Address" className="bg-white input input-bordered max-w-sm text-gray-800" />
									<label className="label">
										<span className="label-text-alt capitalize text-red-600">password wrong!</span>
									</label>
								</div>
								<SocialLogin></SocialLogin>
							</div>
						</div>
						<p className='text-gray-800 text-sm ml-1 my-2 capitalize'>Have a already account?
							<Link to={"/login"} className="text-green-500"> go login</Link> </p>
						<div className='lg:text-end text:start my-3'>
							<input type="submit" value=" Sing Up" className="btn text-gray-900 hover:bg-green-600 border-gray-200 w-full lg:w-auto bg-green-500 hover:text-gray-50 border-none" />
						</div>
					</div>
				</form>
			</div>

		</div>
	);
};

export default SingUp;