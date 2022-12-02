import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebaseAuth/firebase.init';
import Loader from './Loader';
import  './Login.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
	const [open, setOpen] = useState(false)

	const emailRef = useRef('');
	const passwordRef = useRef('')
	// const [fetchUser, setFetchUser] = useState({})
	// const [fetchLoading, setfetchLoading] = useState(false)
	// const [fetchError, setfetchError] = useState("")
	// const { register, handleSubmit, formState: { errors } } = useForm();
	let navigate = useNavigate();
	let location = useLocation();



	let from = location.state?.from?.pathname || "/";


	// if (fetchLoading) {
	// 	return <Loader></Loader>
	// }

	const handleAdminLogin = async (e) => {
		e.preventDefault()
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const data = { email, password }
		axios.post('http://localhost:5000/api/v1/login-user',data).then(res => {
			console.log("response is",res);
			if (res.data.status) {
				localStorage.setItem("accessToken", res.data.accessToken)
				toast.success("login success");
				navigate(from, { replace: true });
			}
		}).catch(error => {
			toast.error(error.response.data.message);
		})
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
					<form onSubmit={handleAdminLogin}>
						<div className=" flex items-center mb-6">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text h-[32px] border-none"><i className="fa fa-user"></i></span>
							</div>
							<input
								ref={emailRef}
								type="text"
								placeholder="Email"
								className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<div className=" flex items-center mb-6 ">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text  h-[32px] border-none"><i className="fa fa-lock"></i></span>
							</div>
							<input
								ref={passwordRef}
								type="password"
								placeholder="Password"
								className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<p></p>
						<button
							disabled={!open}
							type="submit"
							value={"login"}
							className="submitBtn btn btn-md text-white btn-block ">LOGIN</button>

						<div className="message mt-3">
							<div className='flex items-center'>
								<input onClick={() => setOpen(!open)} className='w-4 h-4 mr-2 bg-white text-gray-900 border-2 border-gray-800' id='check' type="checkbox" /> <label htmlFor="check" className='text-gray-800 cursor-pointer'>Remember ME</label>
							</div>

							<div><Link className='text-gray-600'>Forgot your password</Link></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;