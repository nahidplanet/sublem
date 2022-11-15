import React from 'react';
import visa from '../../../src/assets/footer/visa.jpg'
import master from '../../../src/assets/footer/master.png'

const Footer = () => {
    return (
        <div>
            {/* footer top  */}


            {/* <div className="bg-gray-300 py-3 flex justify-center items-center gap-10">
                <div className="text">
                    <h1 className='text-gray-800'>Sign up to receive updates and exclusive offers by email</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <input type="text" placeholder="What are you looking for?" className="input input-bordered border-black  input-md w-[300px] bg-white border-r-0 rounded rounded-r-none" />
                    <button className='border w-[40px] border-l-0 bg-black text-white  border-black rounded rounded-l-none'>
                        <MagnifyingGlassIcon className='w-5 h-[46px] mx-2 ' />
                    </button>
                </div>
            </div> */}


            
            {/* footer  */}
            <div className='text-gray-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  mt-96'>

                <div className=" social">
                    <h4 className='capitalize font-semibold text-gray-700'>social</h4>
                </div>
                <div className=" information">
                    <h4 className='capitalize font-semibold text-gray-700'>information</h4>
                    <div>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                <div className=" the company">
                    <h4 className='capitalize font-semibold text-gray-700'>the company</h4>
                    <div>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                <div className=" shop by room">
                    <h4 className='capitalize font-semibold text-gray-700'>shop by room</h4>
                    <div>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
                <div className=" department">
                    <h4 className='capitalize font-semibold text-gray-700'>department</h4>
                    <div>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                        <p>aaaaaaaaaaaaaaaaa</p>
                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <div className=' pb-5 '>
                <div className='flex justify-between items-center text-sm'>
                    <p>© 2022 Pan Emirates Home Furnishings. All Rights Reserved.</p>
                    <p>eCommerce by Visualsoft</p>
                </div>
                <div className=' mx-auto'>
                    <div className="flex justify-center items-center">
                        <img className='w-10 h-6' src={visa} alt="visa" />
                        <img className='w-10 h-6' src={master} alt="master" />
                        <img className='w-10 h-6' src={visa} alt="visa" />
                    </div>
                    <p className='text-[10px]  text-center'>Pan Emirates Home Furnishings - Sharjah, UAE</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;