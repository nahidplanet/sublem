import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    return (
        <div className='flex gap-5'>

            <div className="dropdown dropdown-hover ">
                <div className='flex justify-center items-center '>
                    <label tabIndex={0} className=" m-1 cursor-pointer capitalize">Furniture</label>
                    <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                    <li><Link>Item 1</Link></li>
                    <li><Link>Item 2</Link></li>
                </ul>
            </div>

            <div className="dropdown dropdown-hover ">
                <div className='flex justify-center items-center'>
                    <label tabIndex={0} className=" m-1 cursor-pointer capitalize">Accessorices</label>
                    <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-white rounded-box w-52">
                    <li><Link>Item 3</Link></li>
                    <li><Link>Item 4</Link></li>
                </ul>
            </div>


            <div className="dropdown dropdown-hover ">
                <div className='flex justify-center items-center'>
                    <label tabIndex={0} className=" m-1 cursor-pointer capitalize">Kids & Teens</label>
                    <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-white rounded-box w-52">
                    <li><Link>Item 5</Link></li>
                    <li><Link>Item 6 </Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover ">
                <div className='flex justify-center items-center'>
                    <label tabIndex={0} className=" m-1 cursor-pointer capitalize">sale</label>
                    <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-white rounded-box w-52">
                    <li><Link>Item 5</Link></li>
                    <li><Link>Item 6 </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;