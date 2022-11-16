import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
	return (
		<div className='flex bg-gray-50 justify-center items-center  w-full min-h-screen'>
			<div className='bg-white lg:w-5/12 md:5/12 w-10/12 rounded-lg shadow-sm border px-5 py-3' >

				<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl'>login</h1>

				<div className='flex justify-center'>
					<form action="" method="get" className='w-full'>
						<div className="form-control ">
							<label className="label">
								<span className="label-text text-gray-900 capitalize text-md font-medium">your email</span>
							</label>
							<input type="text" placeholder="Email..." className="bg-white input input-bordered w-full " />
							<label className="label">
								<span className="label-text-alt capitalize text-red-600">password wrong!</span>
							</label>
						</div>
						<div className="form-control ">
							<label className="label">
								<span className="label-text text-gray-900 capitalize text-md font-medium">your password</span>
							</label>
							<input type="password" placeholder="********" className="bg-white input input-bordered w-full " />
							<label className="label">
								<span className="label-text-alt capitalize text-red-600">password wrong!</span>
							</label>
						</div>
						<p className='text-gray-800 text-sm ml-1 my-2 capitalize'>new to sublem? <Link to={"/singUp"} className="text-green-500">Create an account</Link> </p>
						<div className='lg:text-end text:start my-3'>
							<input type="submit" value=" login" className="btn bg-gray-50 text-gray-900 hover:bg-gray-200 border-gray-200" />
						</div>
					</form>
				</div>
				<SocialLogin></SocialLogin>

			</div>

		</div>
	);
};

export default Login;