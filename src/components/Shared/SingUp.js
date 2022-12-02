import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';
import Loader from './Loader';
import { toast } from 'react-toastify';


const SingUp = () => {
	// const [isLoading, setisLoading] = useState(false)
	// const [fetchError, getFetchError] = useState("")
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	let handleError;
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, uError] = useUpdateProfile(auth);

	// const { isLoading, error: reactQueryError, data: userDetails } = useQuery(
	// 	['create_user'], () => axios.post('http:localhost:5000/api/v1/user-create')
	// )

	// if (loading || updating || isLoading) {
	// 	return <Loader></Loader>
	// }
	// if (error || uError || fetchError) {
	// 	handleError = <p className='text-red-500'>{error.message || uError.message || fetchError.message}</p>
	// }
	// if (user) {
	// 	// navigate("/")
	// }



	// 'http:localhost:5000/api/v1/user-create'

	const formData = async (data) => {
		// setisLoading(true)
		const userData = {
			fullName: data.name,
			username: data.username,
			email: data.email,
			password: data.password,
			confirmPassword: data.confirmPassword,
			mobileNumber: data.contactNumber,
			addressOne: data.addressFirst,
			addressTwo: data.addressSecond
		}

		fetch('http://localhost:5000/api/v1/user-create', {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(userData)
		}).then(req => req.json())
			.then(data => {
				try {
					// setisLoading(false)
					if (!data?.status) {
						toast.error(data.message)
					} else {
						localStorage.setItem("accessToken", data?.token)
						toast.success("registration successful");
						reset();
					}
				} catch (error) {
					// getFetchError(error.message)
				}

			})
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
										<span className="label-text text-gray-900 capitalize text-md font-medium">full name</span>
									</label>
									<input {...register("name", { required: true, minLength: 3 })} type="text" placeholder="Full Name" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.name?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
										{errors.name?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">username</span>
									</label>
									<input {...register("username", { required: true, minLength: 3 })} type="text" placeholder="Full Name" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.username?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
										{errors.username?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">valid email</span>
									</label>
									<input {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })} type="text" placeholder="Your Email" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.email?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.email?.type === "pattern" && <span className="label-text-alt capitalize text-red-600">please provide a valid Email</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">contact number</span>
									</label>
									<input {...register("contactNumber", { required: true })} type="number" placeholder="Contact Number" className="bg-white input input-bordered w-full text-gray-800" />
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
										<span className="label-text text-gray-900 capitalize text-md font-medium">password</span>
									</label>
									<input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="********" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.password?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.password?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">confirm Password</span>
									</label>
									<input {...register("confirmPassword", { required: true, minLength: 6 })} type="password" placeholder="********" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.confirmPassword?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.confirmPassword?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">address 1</span>
									</label>
									<input {...register("addressFirst", { required: true })} type="text" placeholder="Your Address" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.addressFirst?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required </span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">address 2</span>
									</label>
									<input {...register("addressSecond", { required: true })} type="text" placeholder="Your Address" className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.addressSecond?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required </span>}
									</label>
								</div>
								<SocialLogin></SocialLogin>
							</div>
						</div>
						{handleError && handleError}
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