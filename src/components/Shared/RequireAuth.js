import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useQuery } from 'react-query';
import { Navigate, useLocation } from 'react-router';
import auth from '../../firebaseAuth/firebase.init';
// import axiosInst from '../axios';
import Loader from './Loader';

function RequireAuth({ children }) {
	const [user, loading, error] = useAuthState(auth);

	// const getFacts = () => {
	// 	const res = axiosInst.get('/check-user').then((res) => res)
	// 	return res;
	// };
	// const { data, isLoading } = useQuery('checkAdmin', getFacts);

	let location = useLocation();
	if ( loading) {
		return <Loader></Loader>
	}
	if (!user) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
}

export default RequireAuth;