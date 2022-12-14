import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import auth from '../../../firebaseAuth/firebase.init';
import google from '../../../assets/icon/google.svg'
import facebook from '../../../assets/icon/facebookSocial.svg'
import './SignUp.css'
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader';
import axios from 'axios';



const SignUp = () => {
	const [open, setOpen] = useState(false)
	const emailRef = useRef('');
	const passwordRef = useRef('')
	const userNameRef = useRef('')

	const navigate = useNavigate();

	const [signInWithGoogle, gUser, gloading, gerror] = useSignInWithGoogle(auth);
	const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, pError] = useUpdateProfile(auth);

	if (gloading || updating || loading) {
		// return <Loader></Loader>
	}
	
	const handleSignUp = async (e) => {
		e.preventDefault();
		const displayName = userNameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		
		const userCreateInfo = {
			username: user?.user?.displayName,
			email: user?.user?.email,
			password: password,
		}
		await createUserWithEmailAndPassword(email, password);
		await axios.post('http://localhost:5000/api/v1/user-create', userCreateInfo).then(res => {
			if (res.data.status) {
				localStorage.setItem("accessToken", res.data.accessToken)
				toast.success("account Created");
				
				updateProfile({ displayName })
			}
		}).catch(error => {
			console.log(error.message);
			toast.error(error.response.data.message);
		})

		// await fetch(`http://localhost:5000/api/v1/user-create`, {
		// 	method: "POST",
		// 	headers: {
		// 		"content-type": "application/json"
		// 	},
		// 	body: JSON.stringify(userCreateInfo)
		// })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		console.log("data is", data);
		// 		if (!data.status) {
		// 			toast.error(data?.message);
		// 		};
		// 		if (data.status) {
					
		// 			toast.success("Welcome To Sublem");
		// 			navigate('/');
		// 		}
		// 	})

		if (gerror || pError) {
			console.log(error.message);
		}
		if (user || gUser) {
			navigate('/');
		}

	}



	return (
		<div className="container">
			<div className="form-box shadow-lg border ">
				<div className="header-form">
					<h4 className="text-gray-600 text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
					<div className="image">
					</div>
				</div>
				<div className="body-form ">
					<form onSubmit={handleSignUp}>
						<div className=" flex items-center mb-6">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text h-[32px] border-none"><i className="fa fa-user"></i></span>
							</div>
							<input ref={userNameRef} required type="text" placeholder="User Name" className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<div className=" flex items-center mb-6">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text h-[32px] border-none"><i className="fa fa-user"></i></span>
							</div>
							<input ref={emailRef} type="text" required placeholder="Email" className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<div className=" flex items-center mb-6 ">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text  h-[32px] border-none"><i className="fa fa-lock"></i></span>
							</div>
							<input ref={passwordRef} required type="password" placeholder="Password" className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<p></p>
						<button disabled={!open} type="submit" value={"Sign Out"} className="submitBtn btn btn-md text-white btn-block ">LOGIN</button>
						<p className='text-gray-700 text-sm'>Already have an account? <Link className='underline text-green-500' to={'/login'}>Sign In</Link></p>

						<div className="message mt-3">
							<div className='flex items-center'>
								<input onClick={() => setOpen(!open)} className='w-4 h-4 mr-2 bg-white text-gray-900 border-2 border-gray-800' id='check' type="checkbox" /> <label htmlFor="check" className='text-gray-800 cursor-pointer'>Remember ME</label>
							</div>

							<div><Link className='text-gray-600'>Forgot your password</Link></div>
						</div>
					</form>
					<div className='flex gap-5 items-center justify-center mt-3'>
						<button onClick={() => signInWithGoogle()} className='w-8 h-8 m-0'><img src={google} alt="google" /></button>
						<button className='w-8 h-8 m-0'><img src={facebook} alt="facebook" /></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;