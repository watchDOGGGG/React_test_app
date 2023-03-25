import React, { useState } from 'react';
import axios from 'axios';
import { createProduct } from '../helper/api';
import Header from './../components/header';
import add from './../assets/add.svg';

export default function UploadScreen() {
	const user = JSON.parse(localStorage.getItem('user')) || []; 
	const [fileName, setFileName] = useState([]);
	const [price, setPrice] = useState("");
	const [title, setTitle] = useState("");

	const handleSubmitForm = async (event) => {
		event.preventDefault();

		const formData = new FormData();
		formData.append('file', fileName);
		formData.append('price', price);
		formData.append('productname', title);
		formData.append('farmer_id', user.role ? user.role_id : '');

		const response = await createProduct(formData);
		const finalRes = await response.json();
		console.log(finalRes);
	};


	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		setFileName(file);
	}

	return (
		<div className='pl-12 pr-12'>
			<Header />
			<form
				className='p-7 mt-12'
				method='POST'
				action='http://localhost:5173/uploadfarmer_prod'
				encType='multipart/form-data'>
				<div className='flex items-center justify-center text-center p-3 w-full h-20 bg-green-500 rounded-2xl'>
					<p className='text-white font-extrabold text-2xl'>Product Details</p>
				</div>
				<div className='flex flex-row items-center justify-between mt-10'>
					<div className='space-y-3 w-1/2 pr-10'>
						<p>Category</p>
						<input
							type='text'
							disabled
							className='h-16 w-full border-2 rounded-2xl p-1'
						/>
					</div>
					<div className='space-y-3 w-1/2 pl-10'>
						<p>Select Product</p>
						<input
							disabled
							type='text'
							className='h-16 w-full border-2 rounded-2xl p-1'
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
				{/* {fileName ? <div className='mt-2'>{fileName}</div> : ''} */}
				<div className='mt-4'>
					<p>each picture must not exceed 5 Mb</p>
					<p>Supported formats are *jpg and *png</p>
				</div>
				<div className='space-y-10'>
					<div className='flex flex-row items-center justify-between mt-6'>
						<div className='space-y-3 w-1/2 pr-16'>
							<p>Title</p>
							<input
								type='text'
								className='h-16 w-full border-2 rounded-2xl p-1'
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className='space-y-3 w-1/2 pl-16'>
							<p>Type</p>
							<input
								type='text'
								className='h-16 w-full border-2 rounded-2xl p-1'
								disabled
							/>
						</div>
					</div>
					<div className='space-y-3'>
						<p>Description</p>
						<input
							type='text'
							className='h-44 w-full border-2 rounded-2xl p-1'
							disabled
						/>
					</div>
					<div className='space-y-3 w-1/2 pr-10'>
						<p>Price</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-2xl p-1'
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
				</div>
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
