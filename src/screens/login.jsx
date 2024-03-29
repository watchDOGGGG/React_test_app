import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateLogin } from '../utils/validateInfo';
import { login } from '../helper/api';

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [err, setErr] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	const handleLogin = async (event) => {
		event.preventDefault();
		const payload = { email, password };
		setError(validateLogin(payload));
		setSubmitted(true);
		const response = await login(payload);
		const finalResponse = await response.json();
		if (finalResponse.message.includes("SUCCESS")) {
			localStorage.setItem('user', JSON.stringify(finalResponse?.data));
		    navigate('/profile');
		} else {
			setSubmitted(false);
			setErr('Incorrect Email or Password');
			setTimeout(() => {
				setErr('');
			}, 7000);
		}
		
	};

	return (
		<div className='flex flex-row items-center justify-center'>
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

						{err && (
							<p className='text-red-600 text-sm font-bold ml-8 mt-3'>{err}</p>
						)}
						<div className='text-input ml-[31px] w-[495px] mt-[40px] mb-[53px]'>
							<button
								type='submit'
								className='w-full rounded-[28px] p-2 bg-[#0EB770] text-white'
								disabled={submitted ? 'bg-green-100' : ''}>
								{submitted ? <>Loading...</> : <>Done</>}
							</button>
						</div>
						<div className='text-[#6D7D8B] text-center mb-[83px]'>
							<span>
								Stay signed in Using a public or shared device? Uncheck to
								protect your account. Learn more
							</span>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
