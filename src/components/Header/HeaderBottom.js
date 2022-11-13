import React from 'react';

const HeaderBottom = () => {

    

    return (
        <div className='h-12 w-full text-white text-sm bg-[#7B797A] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='flex gap-5 justify-center h-full w-full'>
                <span>log</span>
                <p>Delivery within 48 hours- Order before 4pm*</p>
            </div>

            <div className='flex gap-5 justify-center'>
                <span>log</span>
                <p>Free and Easy Returns Withing 72 hours*</p>
            </div>

            <div className='flex gap-5 justify-center'>
                <span>log</span>
                <p>Free Delivery and Fixing With No Minimum Spend*</p>
            </div>
        </div>
    );
};

export default HeaderBottom;