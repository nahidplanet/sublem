import React from 'react';
import facebook from "../../assets/icon/facebookSocial.svg"
import google from "../../assets/icon/googleSocial.svg"
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';

const SocialLogin = () => {

	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

const handleSingInWithGoogle = () =>{
	signInWithGoogle();
}
const handleSingInWithFacebook = () =>{

}
	return (
		<div className='w-full my-3'>
			<div className='divider'>or</div>
			<div className='flex justify-center gap-2 lg:gap-5 w-full '>

				<button onClick={handleSingInWithGoogle} className=' 4/12 bg-gray-50 hover:border-none text-gray-900 hover:bg-gray-200 border-gray-200' >
					<img className='w-12 h-12 ' src={google} alt="facebook" />
				</button >
				<button onClick={handleSingInWithFacebook} className=' 4/12 bg-gray-50 hover:border-none text-gray-900 hover:bg-gray-200 border-gray-200' >
					<img className='w-12 h-12 ' src={facebook} alt="google" />
				</button >
			</div>
		</div>
	);
};

export default SocialLogin;