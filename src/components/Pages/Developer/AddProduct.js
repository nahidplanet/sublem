import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProduct = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const formData = async (data) => {
	
		
	}
	return (
		<div className='flex justify-center w-full min-h-screen '>
			<div className='bg-white lg:w-8/12 md:10/12 w-10/12 rounded-lg shadow-sm border ' >
				<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl my-5'>add product</h1>
				<form onSubmit={handleSubmit(formData)} className='w-full'>
					<div className='grid grid-cols-1 gap-5 p-5 justify-around'>
						<div className=' w-full' >
							<div className='flex flex-col '>
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
										<span className="label-text text-gray-900 capitalize text-md font-medium">sort description</span>
									</label>
									<textarea {...register("email", { required: true})} className="textarea textarea-bordered w-full text-gray-800 bg-white" placeholder="Bio"></textarea>
									
									<label className="label">
										{errors.email?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.email?.type === "pattern" && <span className="label-text-alt capitalize text-red-600">please provide a valid Email</span>}
									</label>
								</div>
								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">Long description</span>
									</label>
									<textarea {...register("email", { required: true})} className="textarea textarea-bordered w-full text-gray-800 bg-white" placeholder="Bio"></textarea>
									
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
							</div>
						</div>
						<div className='lg:text-end text:start my-3'>
							<input type="submit" value="Publish" className="btn text-gray-900 hover:bg-green-600 border-gray-200 w-full bg-green-500 hover:text-gray-50 border-none" />
						</div>
					</div>
				</form>
			</div>

		</div>
	);
};

export default AddProduct;