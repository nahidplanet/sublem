
import React from 'react';
import { HeartIcon } from '@heroicons/react/24/solid'

const FeatureSingleProduct = () => {
    return (
        <div className=' w-[330px] h-[340px] border p-2'>
            <div className="w-[300px]  h-[200px] border  mx-auto ">
                <img className=' w-full h-full mx-auto'
                    src="https://www.panemirates.com/images/calgary-3-seater-sofa-p42078-184865_related.jpg"
                    alt="productimage" />
            </div>
            <div className="name">
                <h3 className='text-gray-800'>Everwind Corner Sofa set</h3>
            </div>
            <div className='flex gap-4 text-sm'>
                <span>10,000 AED</span>
                <del >15,000 AED</del>
                <span>save 5,000 AED</span>
            </div>
            <div className='grid grid-cols-3 gap-3 text-gray-800'>
                <button className=' border p-2 '>but now</button>
                <button >view</button>
                <button className='flex justify-center items-center'>
                    <HeartIcon className='w-6 h-6 text-gray-600' />
                </button>
            </div>
        </div>
    );
};

export default FeatureSingleProduct;