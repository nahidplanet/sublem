import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';
import Loader from './Loader';


const SingUp = () => {
	const  navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm();
	let handleError ;
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	  ] = useCreateUserWithEmailAndPassword(auth);
	  const [updateProfile, updating, uError] = useUpdateProfile(auth);

if (loading || updating) {
	return <Loader></Loader>
}
if (error || uError) {
	handleError = <p className='text-red-500'>{error.message}</p>
}
if (user) {
	navigate("/")
}




	const formData = async (data) => {
		const userData={
			name:data.name,
			email:data.email,
			password:data.password,
			contactNumber:data.contactNumber,
			addressFirst:data.addressFirst,
			addressSecond:data.addressSecond
		}

		await createUserWithEmailAndPassword(data.email,data.password);
		await updateProfile({displayName: data.name})
		
	}
	return (
		<div className='flex bg-gray-50 justify-center items-center  w-full min-h-screen lg:p-20'>
			<div className='bg-white lg:w-10/12 md:10/12 w-10/12 rounded-lg shadow-sm border px-5 py-3' >
				<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl mb-5'>Sing Up</h1>
				<form onSubmit={handleSubmit(formData)} className='w-full'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 justify-around'>
						<div className=' w-full' >
							<div className='flex flex-col justify-center'>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your name</span>
									</label>
									<input {...register("name", { required: true, minLength: 3 })} type="text" placeholder="Full Name" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.name?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
										{errors.name?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your email</span>
									</label>
									<input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="text" placeholder="Your Email" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.email?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.email?.type === "pattern" && <span className="label-text-alt capitalize text-red-600">please provide a valid Email</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your password</span>
									</label>
									<input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="********" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.password?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.password?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">contact number</span>
									</label>
									<input {...register("contactNumber", { required: true})} type="number" placeholder="Contact Number" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.contactNumber?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
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
									<input {...register("addressFirst", { required: true })} type="text" placeholder="Your Address" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
									{errors.addressFirst?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required </span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your address 2</span>
									</label>
									<input {...register("addressSecond", { required: true })} type="text" placeholder="Your Address" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
									{errors.addressSecond?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required </span>}
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