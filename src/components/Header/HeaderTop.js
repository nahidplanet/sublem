import React from 'react';
import { HeartIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';
import useCart from '../../hooks/useCart';
const HeaderTop = () => {
const [products,totalProduct,totalPrice,isLoading,refetch] = useCart();
    // let handleError;
    // const [user, loading, error] = useAuthState(auth);
    // const [signOut] = useSignOut(auth);
    // const navigate = useNavigate()
    // if (loading ) {
    //     return <Loader></Loader>
    // }
    // if (error ) {
    //     handleError = <p className='text-red-500'>{error.message}</p>

    // }
    // if (!user) {
    //     signOut()
        // navigate("/login")
    // }

    return (
        <div className='hidden lg:block text-white text-sm capitalize'>
            <div className='bg-gray-800 h-12 flex justify-end  gap-5 items-center p-4'>
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
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=" cursor-pointer pr-2">
                            <div className="indicator bg-none">
                                <p className='text-semibold capitalize'>profile</p>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 rounded-md card card-compact dropdown-content w-52 bg-gray-100 shadow">
                            <div className="card-body text-gray-800">
                                <ul className="menu  w-full">
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/profile"}>Account</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/wishlist"}>Wishlist</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/save-cart"}>Save Cart</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link to={"dashboard/order-history"}>Order History</Link></li>
                                    <li className='hover:bg-slate-200 text-gray-900 rounded-md'><Link>onClick={async () => {
                                        // await signOut(auth)
                                        // await localStorage.removeItem("accessToken");
                                    }}</Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div  className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <ShoppingBagIcon className='w-5 h-5 text-normal' />
                                <span className="badge badge-sm indicator-item">{totalProduct}</span>
                            </div>

                        </label>
                        <div tabIndex={0} className="mt-3 rounded-sm card card-compact dropdown-content w-60 bg-gray-200 border-2 shadow">
                            <div className="card-body">
                                <div className="font-bold text-md text-gray-900 flex items-center justify-between"><span>Total Cart Item</span> <span> {totalProduct}</span></div>
                                <div className="font-bold text-md text-gray-900 flex items-center justify-between"><span>Estimated Total:</span> <span>{totalPrice}AED</span></div>
                                <div className="card-actions">
                                    <Link to="/cart"  className="btn btn-primary btn-block">View cart </Link>
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