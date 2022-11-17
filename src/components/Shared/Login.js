import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';
import Loader from './Loader';

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	let navigate = useNavigate();
	let location = useLocation();
	let handleError;
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);


	let from = location.state?.from?.pathname || "/";

	if (loading) {
		return <Loader></Loader>
	}
	if (error) {
		handleError = <p className='text-red-500'>{error.message}</p>
	}
	if (user) {
		 navigate(from, { replace: true });
	}







	const formData = (data) => {
		signInWithEmailAndPassword(data.email, data.password)
	}


	return (
		<div className='flex bg-gray-50 justify-center items-center  w-full min-h-screen'>
			<div className='bg-white lg:w-5/12 md:5/12 w-10/12 rounded-lg shadow-sm border px-5 py-3' >

				<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl'>login</h1>

				<div className='flex justify-center'>
					<form onSubmit={handleSubmit(formData)} className='w-full'>
						<div className="form-control ">
							<label className="label">
								<span className="label-text text-gray-900 capitalize text-md font-medium">your email</span>
							</label>
							<input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="text" placeholder="Email..." className="bg-white input input-bordered w-full " />
							<label className="label">
								{errors.email?.type === "required" && <span className="label-text-alt capitalize text-red-600">Email is required</span>}
								{errors.email?.type === "pattern" && <span className="label-text-alt capitalize text-red-600">please provide a valid Email</span>}
							</label>
						</div>
						<div className="form-control ">
							<label className="label">
								<span className="label-text text-gray-900 capitalize text-md font-medium">your password</span>
							</label>
							<input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="********" className="bg-white input input-bordered w-full " />
							<label className="label">
								{errors.password?.type === "required" && <span className="label-text-alt capitalize text-red-600">password is required</span>}
								{errors.password?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}

							</label>
						</div>
						{handleError && handleError}
						<p className='text-gray-800 text-sm ml-1 my-2 capitalize'>new to sublem? <Link to={"/singup"} className="text-green-500">Create an account</Link> </p>
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