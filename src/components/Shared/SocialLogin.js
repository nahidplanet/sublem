import React from 'react';
import facebook from "../../assets/icon/facebookSocial.svg"
import google from "../../assets/icon/googleSocial.svg"
const SocialLogin = () => {
	return (
		<div className='w-full my-3'>
			<div className='divider'>or</div>
			<div className='flex justify-center gap-2 lg:gap-5 w-full '>

				<button className=' 4/12 bg-gray-50 hover:border-none text-gray-900 hover:bg-gray-200 border-gray-200' >
					<img className='w-12 h-12 ' src={google} alt="facebook" />
				</button >
				<button className=' 4/12 bg-gray-50 hover:border-none text-gray-900 hover:bg-gray-200 border-gray-200' >
					<img className='w-12 h-12 ' src={facebook} alt="google" />
				</button >
			</div>
		</div>
	);
};

export default SocialLogin;