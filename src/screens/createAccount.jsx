import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from '../helper/api';
import { validateSignUp } from '../utils/validateInfo';
import add from './../assets/add.svg';

export default function CreateAccount() {
	const [filename, setFileName] = useState('');
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhoneNumber] = useState('');
	const [username, setUserName] = useState('');
	const [role, setRole] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [err, setErr] = useState([]);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const navigate = useNavigate();

	const onHandleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('file', filename);
		formData.append('firstname', firstname);
		formData.append('lastname', lastname);
		formData.append('email', email);
		formData.append('phone', phone);
		formData.append('username', username);
		formData.append('role', role);
		formData.append('password', password);

		const values = {
			filename,
			firstname,
			lastname,
			email,
			phone,
			username,
			role,
			password,
		};

		setError(validateSignUp(values));
		setIsSubmitted(false);

		try {
			const response = await createAccount(formData);
			const finalResponse = await response.json();		

			if (finalResponse.message.includes('Successfully')) {
				setIsSubmitted(true);
				delete values.password;
				localStorage.setItem('user', JSON.stringify(finalResponse?.data));
				if (values.role === 'customer') {
					navigate('/profile');
				} else {
					navigate('/uploadScreen');
				}
			} else {
				setIsSubmitted(false);
				setErr(finalResponse?.message);
				setTimeout(() => {
					setErr('');
				}, 7000);
			}
		} catch (error) {
			console.error(error);
		}
		// const response = await createAccount(formData);
		// const finalResponse = await response.json();

	}

	const handleFileUpload = (event) => {
		const file = event.target.files[0];
		setFileName(file);
	};


	return (
		<div className='flex flex-col items-center justify-center mt-12'>
			<p className='text-7xl font-bold'>Create An Account</p>
			<form className='w-96 shadow-lg p-4 mt-10'>
				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>First Name</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				{error.firstname && (
					<p className='text-red-600 text-sm font-bold'>{error.firstname}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>LastName</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				{error.lastname && (
					<p className='text-red-600 text-sm font-bold'>{error.lastname}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>Email Address</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				{error.email && (
					<p className='text-red-600 text-sm font-bold'>{error.email}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>Phone Number</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				{error.phone && (
					<p className='text-red-600 text-sm font-bold'>{error.phone}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>User Name</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				{error.username && (
					<p className='text-red-600 text-sm font-bold'>{error.username}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>Role</label>
					<select
						type='text'
						className='h-16 border-2 rounded-2xl p-1'
						onClick={(e) => setRole(e.target.value)}>
						<option value='customer'>Select a role</option>
						<option value='customer'>Customer</option>
						<option value='farmer'>Farmer</option>
					</select>
				</div>
				{error.role && (
					<p className='text-red-600 text-sm font-bold'>{error.role}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>Password</label>
					<input
						type='password'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className='flex flex-col mt-5 font-bold'>
					<label>Add profile photo</label>
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
							className='flex items-center mt-2 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
							<img
								src={add}
								alt={add}
								className='h-12 w-12'
							/>
						</label>
					</div>
					{filename ? <div className='mt-2'>{filename.name}</div> : ''}
				</div>
				{error.password && (
					<p className='text-red-600 text-sm font-bold'>{error.password}</p>
				)}

				{err && <p className='text-red-600 text-sm font-bold'>{err}</p>}

				<button
					className='h-16 w-full bg-green-500 text-center rounded-2xl mt-10 font-bold text-white'
					onClick={onHandleSubmit}>
					{isSubmitted ? <>Loading...</> : <>Done</>}
				</button>
				<button className='h-16 w-full border-2 text-center rounded-2xl mt-10 font-bold text-black'>
					Continue with email
				</button>
				<div className='flex flex-col text-center text-xs items-center justify-center font-bold mt-12 mb-8'>
					<p>By signing up you agree to our teams and conditions</p>
					<p>& privacy policy</p>
				</div>
			</form>
			<p className='text-xs mt-12'>Already have an Account?</p>
			<div className='w-96 p-4 mb-10'>
				<Link to='/login'>
					<button className='h-16 w-full border-2 text-center rounded-2xl mt-10 font-bold text-black'>
						Login
					</button>
				</Link>
			</div>
		</div>
	);
}
