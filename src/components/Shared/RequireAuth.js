import React from 'react';
import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router';
import axiosInst from '../axios';
import Loader from './Loader';

function RequireAuth({ children }) {

	const getFacts = () => {
		const res = axiosInst.get('/check-user').then((res) => res)
		return res;
	};
	const { data, isLoading } = useQuery('checkAdmin', getFacts);

	let location = useLocation();
	if (isLoading) {
		return <Loader></Loader>
	}
	if (data?.data?.admin !== "user") {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;