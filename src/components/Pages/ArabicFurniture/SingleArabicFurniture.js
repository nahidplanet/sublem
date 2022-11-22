import { HeartIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const SingleArabicFurniture = (params) => {
    const navigate = useNavigate();
    const { _id, name, productImage } = params.data;

    const handleArabicProductDetails = (id) => {
        navigate(`/arabic/${id}`);
    }

    return (
        <div className='p-2'>
            <div className="card rounded-none border text-gray-900 ">
                <figure><img src={`http://localhost:5000/images/product/${productImage[0].productImagePath}`} alt="product_image" /></figure>
                <div className="card-body p-2">
                    <div className="card-actions ">
                        <p className='py-1 my-1 text-lg'>{name}</p>
                        <div className='text-xm md:text-md flex justify-between font-semibold w-full'>
                            <p className='text-red-700 font-semibold'>4,000 <span>AED</span></p>
                            <p className='font-normal'> <del>6,000</del> <span className='font-semibold'>AED</span> </p>
                            <p> <span className='text-gray-800 font-bold'>save:</span> 4,000</p>
                        </div>
                        <div className='text-xm md:text-md flex mb-2 justify-evenly gap-5 mt-3 w-full'>
                            <button onClick={()=>handleArabicProductDetails(_id)} className="border hover:bg-slate-100 p-1 rounded-sm w-5/12" >View</button>
                            <button className="border hover:bg-slate-100 p-1 rounded-sm w-5/12">Add Cart</button>
                            <button className="  w-2/12">
                                <HeartIcon className='text-gray-600 w-6 h-6'></HeartIcon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleArabicFurniture;