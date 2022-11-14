import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const MainNavbar = ({data}) => {
    return (
        <div className=''>
            <div className="dropdown dropdown-hover ">
                <div className='flex justify-center items-center '>
                    <label tabIndex={0} className=" m-1 cursor-pointer capitalize">{data.category}</label>
                    <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                {
                    data?.routes.map((route,index)=> <li key={index}><Link>{route.name}</Link></li>)
                }        
                </ul>
            </div>
        </div>
    );
};

export default MainNavbar;