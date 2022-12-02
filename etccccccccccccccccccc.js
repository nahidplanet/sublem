import React, { useRef } from 'react';

const etccccccccccccccccccc = () => {
	const nameRef = useRef('');
	const codeRef = useRef('');
	const sortDescriptionRef = useRef('');
	const longDescriptionRef = useRef('');
	const priceRef = useRef('');
	const discountRef = useRef('');
	const colorRef = useRef('');
	const featureRef = useRef('');
	const categoryRef = useRef('');
	const typeRef = useRef('');
	const productImageRef = useRef('');
	const quantityRef = useRef('');
	const handlerAddProduct = (e) =>{

		e.preventdefault()
		const name = nameRef.current.value;
		const code = codeRef.current.value;
		const sortDescription = sortDescriptionRef.current.value;
		const longDescription = longDescriptionRef.current.value;
		const price = priceRef.current.value;
		const discount = discountRef.current.value;
		const color = colorRef.current.value;
		const feature = featureRef.current.value;
		const category = categoryRef.current.value;
		const type = typeRef.current.value;
		const productImage = productImageRef.current.value;
		const quantity = quantityRef.current.value;
		const formData = {name,code,sortDescription,longDescription,price,discount,color,feature,category,type,productImage,quantity}
	}
	return (
		<div>
			
		</div>
	);
};

export default etccccccccccccccccccc;