import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLogin } from '../utils/validateInfo';
import { adminlogin } from '../helper/api';

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleLogin = async (event) => {
		event.preventDefault();
		const payload = { email, password };
		setError(validateLogin(payload));
		if (email && password) {
			setSubmitted(true);
			const response = await adminlogin(payload);
			const finalResponse = await response.json();
			console.log(finalResponse);
			navigate('/dashboard');
		}
	};

	return (
		<div className='w-[565px] bg-white login-form rounded-[10px] mt-[100px]'>
			<h2 className='text-[69px] text-black font-[800] text-center'>Hello</h2>
			<div className='text-center'>
				<span className='db font-[400px] text-[18px] text-[#6D7D8B]'>
					Sign in to Agro-link or{' '}
					<Link to={'/auth/register'}>create an account</Link>
				</span>
			</div>
			<form onSubmit={handleLogin}>
				<div className='mt-1'>
					<div className='text-input ml-[31px] w-[495px]'>
						<input
							type='email'
							placeholder='Email'
							className='w-full rounded-[28px] p-2'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					{error.email && (
						<p className='text-red-600 text-sm font-bold ml-8 mt-3'>
							{error.email}
						</p>
					)}
					<div className='text-input ml-[31px] w-[495px] mt-[40px]'>
						<input
							type='password'
							placeholder='Password'
							className='w-full rounded-[28px] p-2'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					{error.password && (
						<p className='text-red-600 text-sm font-bold ml-8 mt-3'>
							{error.password}
						</p>
					)}
					<div className='text-input ml-[31px] w-[495px] mt-[40px] mb-[53px]'>
						<button
							type='submit'
							className='w-full rounded-[28px] p-2 bg-[#0EB770] text-white'
							disabled={submitted ? 'bg-green-200' : ''}>
							{submitted ? <>Loading...</> : <>Done</>}
						</button>
					</div>
					<div className='text-[#6D7D8B] text-center mb-[83px]'>
						<span>
							Stay signed in Using a public or shared device? Uncheck to protect
							your account. Learn more
						</span>
					</div>
				</div>
			</form>
		</div>
	);
}
