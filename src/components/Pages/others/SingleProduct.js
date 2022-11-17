import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Header from '../../Header/Header';
import "./SingleProduct.css"
import sofa from "../../../assets/category/home/sofa.jpg"
import ProductSlider from '../Home/ProductSlider';
import Footer from '../../Footer/Footer';

const SingleProduct = () => {
	return (
		<>
			<Header></Header>
			<div className='min-h-screen '>
				<div className='h-10 flex items-center mx-10 capitalize text-md font-semibold text-gray-900 border-b'>
					<span >home/ product/ single-Product</span>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-5 w-full mt-10 lg:px-14 px-6 '>
					<div className='col-span-3 border h-full'>
						<div className='m-10 border h-[initial]'>
							<img src={sofa} alt="sofa" />
						</div>
						<div className="h-[200px] overflow-hidden">
							<ProductSlider></ProductSlider>
						</div>
					</div>
					<div className='col-span-2 text-center text-gray-900 my-5 lg:p-10'>
						<div>
							<h1 className='font-semibold text-xl capitalize'>Caprice Corner Sofa Set</h1>
							<h1 className='font-bold my-2 flex justify-around px-14'>
								<span className='text-red-600'>9,995 AED</span>
								<del className='text-gray-600'>17,150 AED </del>
								<span>Save  7,155 AED</span>
							</h1>
							<p className='text-lg my-2'>Code: 035LMT2000013</p>
							<p> short description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quaerat molestiae tempore aspernatur ut reprehenderit voluptatem id qui magni, mollitia, harum amet eligendi totam fuga!</p>
							<p className='mt-5 text-lg font-semibold'>Prices are inclusive of Tax/VAT</p>
							<p className=' text-lg font-semibold'>Delivery Within 48 hours*</p>
							<div className='mt-5'>
								<h1 className='text-2xl font-semibold text-green-600 '>2 In Stock Now</h1>
								<div>
									<div className='flex justify-center items-center my-3'>
										<button className='border gb-gray-600 w-10 h-10 rounded-md text-white font-bold bg-gray-500'>-</button>
										<input className='w-14 h-8 mx-4 px-2 py-1 bg-white border border-gray-900 rounded-sm font-bold' type="number" name="" id="incriecInput" />
										<button className='border gb-gray-600 w-10 h-10 rounded-md text-white font-bold bg-gray-500'>+</button>
									</div>
									<button className='block mx-auto my-10 rounded-md hover:bg-green-700 bg-green-500 w-7/12 py-4 text-lg text-black capitalize font-bold text-center'>add to cart</button>
									<div className='w-full'>
										<button className='flex items-center mx-auto text-green-600 underline font-normal px-3 py-2 text-xl'>
											<HeartIcon className='w-6 h-6 mr-3 ' />Add to wishlist
										</button>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div className='m-10 p-6 border shadow-md bg-slate-200'>
					<div className='p-10 text-black '>
						long description :
						<br /><br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam, a nemo sed, nobis odio, provident quia aspernatur saepe eius voluptatibus maiores voluptates maxime inventore ipsam laboriosam eaque deleniti. Nobis maxime blanditiis neque iusto et animi modi! Error ea quibusdam eveniet, non assumenda consectetur voluptas unde voluptatibus quaerat! Eligendi officiis at, alias sequi ea porro officia provident suscipit adipisci sapiente expedita quas, obcaecati perspiciatis doloribus. Laborum, modi sequi exercitationem perferendis nam harum soluta dolores distinctio voluptas quisquam quia eos unde delectus nobis eum consectetur facilis nesciunt pariatur inventore et saepe? Pariatur qui expedita impedit, error dignissimos velit quisquam soluta recusandae tempora quaerat facere nesciunt quas voluptatum consectetur ducimus unde reprehenderit! Cumque ut quos ea consectetur! Exercitationem quaerat itaque officia recusandae, consequuntur sed quam dolor odio vero, deserunt minima eos velit! Quos, pariatur incidunt obcaecati nobis, quas voluptates neque reiciendis, suscipit ipsam itaque facilis maxime modi. Delectus, laudantium sed nemo magni, error dolor odit cum voluptates expedita, aliquid exercitationem optio? Sint ad hic dolore temporibus, corrupti praesentium totam cumque aliquid accusamus quibusdam at! Doloremque explicabo asperiores eligendi similique deleniti modi repudiandae. Quibusdam natus quidem libero nesciunt voluptas assumenda nemo? Labore repudiandae, minima excepturi aperiam nesciunt molestias omnis alias sapiente corrupti mollitia est ipsam, voluptatibus, nam necessitatibus quibusdam sed. Eveniet delectus accusamus voluptatum nostrum modi dolorem, nisi aperiam inventore tenetur laborum molestias molestiae corrupti fugiat voluptatem minus accusantium in consequ
					</div>
				</div>
				<div className='h-18'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, rem?
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default SingleProduct;