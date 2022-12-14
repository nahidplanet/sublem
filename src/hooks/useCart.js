import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import axiosInst from '../components/axios';
import Loader from '../components/Shared/Loader';
import auth from '../firebaseAuth/firebase.init';

const useCart = () => {
	const [user, loading, error] = useAuthState(auth);
	const { isLoading, data: products, refetch } = useQuery(
		['cartProduct',user], () => axiosInst.get('/product/cart/user')
			.then(data => data)
	)


	const totalProduct = products?.data?.result?.cartItems.reduce((x, y) => x + y.quantity, 0);
	const totalPrice = products?.data?.result?.cartItems.reduce((x, y) => x + (y.price * y.quantity), 0);
	return [products, totalProduct, totalPrice, isLoading, refetch]
};






export default useCart;