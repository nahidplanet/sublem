import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router';
import axiosInst from '../axios';
import Loader from '../Shared/Loader';

const RequireAdmin = ({ children }) => {
	const location = useLocation();

	const getFacts = () => {
		const res = axiosInst.get('/check-admin').then(res => res)
		return res;
	};
	const { data, isLoading } = useQuery('checkAdmin', getFacts);
	if (isLoading) {
		return <Loader></Loader>
	}
	if (data?.data?.admin !== "admin") {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page
		return <Navigate to="/developer/login" state={{ from: location }} replace></Navigate>
	}

	return children;
};

export default RequireAdmin;