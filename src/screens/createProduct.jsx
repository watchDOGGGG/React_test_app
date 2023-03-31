import React, { useState } from 'react';
import { createProduct } from '../helper/api';
import { useNavigate } from 'react-router-dom';
import Header from './../components/header';
import add from './../assets/add.svg';

export default function UploadScreen() {
	const user = JSON.parse(localStorage.getItem('user')) || []; 
	const [fileName, setFileName] = useState("");
	const [res, setRes] = useState(null);
	const [price, setPrice] = useState("");
	const [error, setError] = useState("");
	const [title, setTitle] = useState("");
	const [type, setType] = useState("");
	const [quantity, setQuantity] = useState("");
	const [description, setDescription] = useState("");

	const navigate = useNavigate();

	const handleSubmitForm = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('file', fileName);
		formData.append('price', price);
		formData.append('type', type);
		formData.append('quantity', quantity);
		formData.append('description', description);
		formData.append('productname', title);
		formData.append('farmer_id', user.role ? user.role_id : '');

		if (fileName.name && price && title  && type && quantity && description) {
			const response = await createProduct(formData);
	        await response.json();	
			setRes("Product successfully created*");
			setPrice("");
			setTitle("");
			setFileName("");
			setType("");
			setQuantity("");
			setDescription("");
			setTimeout(() => {
				setRes(""), navigate('/profile')
			}, 3000);
		} else {
			setRes("Please fill in all the required field (add image photo, title, price, type, quantity and description)*");
			setTimeout(() => {
				setRes("")
			}, 5000);

		}
	};


	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		const fileNameParts = file.name.split('.');
		const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();

		if (file && !['jpeg', 'png', 'jpg', 'svg+xml'].includes(fileExtension)) {
			setError(
				'File type not supported. Please select a jpeg, png, jpg, or svg file.'
			);
			setFileName('');
		} else {
			setFileName(file);
			setError('');
		}
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			<Header />
			<form
				className='pl-32 pr-32 mt-5 w-full'
				method='POST'
				action='http://localhost:5173/uploadfarmer_prod'
				encType='multipart/form-data'>
				<div className='flex items-center justify-center text-center p-3 w-full h-20 bg-green-500 rounded-2xl'>
					<p className='text-white font-extrabold text-2xl'>Product Details</p>
				</div>

				<div className='space-y-10'>
					<div className='flex flex-row items-center justify-between mt-6'>
						<div className='space-y-3 w-1/2 pr-16'>
							<p>Title</p>
							<input
								type='text'
								placeholder='Title'
								className='h-16 w-full border-2 rounded-2xl p-1'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='space-y-3 w-1/2 pl-16'>
							<p>Type</p>
							<input
								type='text'
								className='h-16 w-full border-2 rounded-2xl p-1'
								placeholder='Type'
								value={type}
								onChange={(e) => setType(e.target.value)}
							/>
						</div>
					</div>
					<div className='space-y-3'>
						<p>Description</p>
						<input
							type='text'
							className='flex text-start h-44 w-full border-2 rounded-2xl p-1'
							placeholder='Description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className='flex flex-row items-center justify-between mt-6'>
						<div className='space-y-3 w-1/2 pr-10'>
							<p>Quantity</p>
							<input
								placeholder='Quantity'
								type='text'
								className='h-16 w-full border-2 rounded-2xl p-1'
								value={quantity}
								onChange={(e) => setQuantity(e.target.value)}
							/>
						</div>
						<div className='space-y-3 w-1/2 pl-10'>
							<p>Price</p>
							<input
								type='text'
								placeholder='₦ 00.00'
								className='h-16 w-full border-2 rounded-2xl p-1'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
					    </div>
					</div>
					<div className='mt-10'>
						<p className='text-2xl font-bold'>Add Photo</p>
						<p>Add at least 1 photo for this category</p>
						<p>
							First picture - Is the title picture. You can change the order by
							just drag and drop
						</p>
					</div>
					<div>
						<input
							type='file'
							id='fileInput'
							name='file'
							style={{ display: 'none' }}
							onChange={handleFileUpload}
						/>
						<label
							htmlFor='fileInput'
							className='flex items-center mt-8 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
							<img
								src={add}
								alt={add}
								className='h-12 w-12'
							/>
						</label>
					</div>
					{fileName ? <div className='mt-2'>{fileName.name}</div> : ''}
					{error && (
						<p className='text-red-600 text-sm font-bold mt-2'>{error}</p>
					)}
					<div className='mt-4'>
						<p>each picture must not exceed 5 Mb</p>
						<p>Supported formats are *jpg and *png</p>
					</div>
				</div>

				{res && <h1 className='text-3xl text-emerald-400 mt-3'>{res}</h1>}

				<div className='flex items-center justify-center mt-28 mb-12'>
					<button
						onClick={handleSubmitForm}
						className='w-80 bg-black text-white h-16 rounded-full text-2xl font-bold'>
						Next
					</button>
				</div>
			</form>
		</div>
	);
}
