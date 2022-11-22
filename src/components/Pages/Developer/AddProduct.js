import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProduct = () => {
	const { register, handleSubmit, formState: { errors },reset } = useForm();

	const onSubmit = async (products) => {
		let formData = new FormData();

		const img = products.productImage;
		Object.keys(img).forEach(function (key, index) {

		formData.append("productImage", img[key])
		});

		formData.append("name", products.name);
		formData.append("code", products.code);
		formData.append("sortDescription", products.sortDescription);
		formData.append("longDescription", products.longDescription);
		formData.append("regularPrice", products.regularPrice);
		formData.append("newPrice", products.newPrice);
		formData.append("selectCategory", products.selectCategory);
		formData.append("productType", products.productType);

		const requestOptions = {
			method: 'POST',
			body: formData
		};
		fetch('http://localhost:5000/api/v1/product', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				if (!data.status) {
					toast.error("product upload failed")
				}else{
					toast.success("product upload successful");
					reset();
					
				}
			})

	}

	return (
		<div className='flex justify-center w-full min-h-screen '>
			<div className='bg-white lg:w-8/12 md:10/12 w-10/12 rounded-lg shadow-sm border ' >
				<h1 className='capitalize text-center text-gray-800 font-semibold text-3xl my-5'>add product</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='w-full' encType="multipart/form-data">
					<div className='grid grid-cols-1 gap-5 p-5 justify-around'>
						<div className=' w-full' >
							<div className='flex flex-col'>
								<div className="form-control">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">your name</span>
									</label>
									<input
										{...register("name", { required: true, minLength: 3 })}
										type="text"
										placeholder="Product Name"
										className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.name?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
										{errors.name?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">unique code</span>
									</label>
									<input
										{...register("code", { required: true, minLength: 3 })}
										type="text"
										placeholder="Unique Code"
										className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.code?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
										{errors.code?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">sort description</span>
									</label>
									<textarea
										{...register("sortDescription", { required: true })}
										className="textarea textarea-bordered w-full text-gray-800 bg-white"
										placeholder="Sort Description">
									</textarea>
									<label className="label">
										{errors.sortDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
									</label>
								</div>

								<div className="form-control">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">Long description</span>
									</label>
									<textarea
										{...register("longDescription", { required: true })}
										className="textarea textarea-bordered w-full text-gray-800 bg-white"
										placeholder="Long Description">
									</textarea>
									<label className="label">
										{errors.longDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">regular price</span>
									</label>
									<input
										{...register("regularPrice", { required: true, minLength: 1 })}
										type="number"
										placeholder="Regular Price"
										className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.regularPrice?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.regularPrice?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 1 characters</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">New Price</span>
									</label>
									<input
										{...register("newPrice", { required: true, minLength: 1 })}
										type="number"
										placeholder="New Price"
										className="bg-white input input-bordered w-full text-gray-800" />
									<label className="label">
										{errors.newPrice?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
										{errors.newPrice?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 1 characters</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">Select Category</span>
									</label>

									<select
										className="bg-white input input-bordered w-full text-gray-800"
										{...register("selectCategory", { required: true, })}>
										<option value="arabic">Arabic Furniture</option>
										<option value="home">Home Furniture</option>
										<option value="Office">Office Furniture</option>
									</select>
									<label className="label">
										{errors.selectCategory?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">Product Type</span>
									</label>
									<select
										className="bg-white input input-bordered w-full text-gray-800"
										{...register("productType", { required: true, })}>
										<option value="sofa">Sofa</option>
										<option value="bed">Bed</option>
										<option value="carpet">Carpet</option>
										<option value="bed_mattress">Bed Mattress</option>
										<option value="curtain">Curtain</option>
										<option value="wallpaper">Wallpaper</option>
									</select>
									<label className="label">
										{errors.productType?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
									</label>
								</div>

								<div className="form-control ">
									<label className="label">
										<span className="label-text text-gray-900 capitalize text-md font-medium">Product Image</span>
									</label>
									<input
										multiple
										name='productPic'
										{...register("productImage", { required: true })}
										type="file"
										className="bg-white input input-bordered w-full text-gray-800 " />
									<label className="label">
										{errors.productImage?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
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