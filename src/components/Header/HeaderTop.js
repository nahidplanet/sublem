import React from 'react';
import { HeartIcon, PhoneIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
const HeaderTop = () => {
    return (
        <div className='hidden lg:block text-white text-sm capitalize'>
            <div className='bg-gray-800 h-8 flex justify-end  gap-5 items-center p-4'>
                <div className='flex items-center justify-start'>
                    <PhoneIcon className='w-4 h-4 mr-1 text-normal'></PhoneIcon>
                    <p>contact us ( +88 01791180333 )</p>
                </div>
                <div className='flex items-center justify-start'>
                    <HeartIcon className='w-4 h-4 mr-1'></HeartIcon>
                    <p>Wishlist
                    </p>
                </div>
                <div className='flex items-center justify-start'>
                    <UserCircleIcon className='w-5 h-5 mr-1 text-normal'></UserCircleIcon>
                    <p>profile</p>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <ShoppingBagIcon className='w-5 h-5 text-normal' />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>

                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-gray-300 shadow">
                            <div className="card-body">
                                <span className="font-bold text-md">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;