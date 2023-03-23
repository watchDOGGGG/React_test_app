import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateSignUp } from '../utils/validateInfo';

export default function CreateAccount() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [userName, setUserName] = useState('');
	const [role, setRole] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const onHandleSubmit = async (e) => {
		e.preventDefault();

		const values = {
			firstName,
			lastName,
			email,
			phoneNumber,
			userName,
			role,
			password
		}

		setError(validateSignUp(values));




	}

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
				{error.firstName && (
					<p className='text-red-600 text-sm font-bold'>{error.firstName}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>LastName</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>
				{error.lastName && (
					<p className='text-red-600 text-sm font-bold'>{error.lastName}</p>
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
				{error.phoneNumber && (
					<p className='text-red-600 text-sm font-bold'>{error.phoneNumber}</p>
				)}

				<div className='flex flex-col mt-5 space-y-3 font-bold'>
					<label>User Name</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
						onChange={(e) => setUserName(e.target.value)}
					/>
				</div>
				{error.userName && (
					<p className='text-red-600 text-sm font-bold'>{error.userName}</p>
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
				{error.password && (
					<p className='text-red-600 text-sm font-bold'>{error.password}</p>
				)}

				<button
					className='h-16 w-full bg-green-500 text-center rounded-2xl mt-10 font-bold text-white'
					onClick={onHandleSubmit}>
					Done
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
				<Link to="/">
					<button className='h-16 w-full border-2 text-center rounded-2xl mt-10 font-bold text-black'>
						Login
					</button>
				</Link>
			</div>
		</div>
	);
}
