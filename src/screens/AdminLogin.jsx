import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateAdmin } from '../utils/validateInfo';
import { adminlogin } from '../helper/api';

export default function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [err, setErr] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleLogin = async (event) => {
		event.preventDefault();
		const values = { username, password };
		setError(validateAdmin(values));
		if (username && password) {
			setSubmitted(true);
			const response = await adminlogin(values);
			const finalResponse = await response.json();
			if (finalResponse?.message.includes("successful")) {
				navigate('/dashboard');
			} else {
				setSubmitted(false);
				setErr(finalResponse?.message);
				setTimeout(() => {
					setErr('')
				}, 3000);
				console.log(finalResponse?.message);
			}
        }
	};

	return (
		<div className='flex items-center justify-center'>
			<div className='w-[565px] bg-white login-form rounded-[10px] mt-[100px]'>
				<h2 className='text-[69px] text-black font-[800] text-center'>Hello</h2>
				<div className='text-center'>
					<span className='db font-[400px] text-[18px] text-[#6D7D8B]'>
						Sign in to Agro-link or{' '}
						<Link to={'/auth/register'}>create an account</Link>
					</span>
				</div>
				<form>
					<div className='mt-1'>
						<div className='text-input ml-[31px] w-[495px]'>
							<input
								type='text'
								placeholder='Username'
								className='w-full rounded-[28px] p-2'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						{error.username && (
							<p className='text-red-600 text-sm font-bold ml-8 mt-3'>
								{error.username}
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
							<p className='text-red-600 text-sm font-bold ml-8 mt-3'>
								Incorrect login details
							</p>
						)}
						<div className='text-input ml-[31px] w-[495px] mt-[40px] mb-[53px]'>
							<button
								type='submit'
								onClick={handleLogin}
								className='w-full rounded-[28px] p-2 bg-[#0EB770] text-white'
								disabled={submitted ? 'bg-green-200' : ''}>
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
