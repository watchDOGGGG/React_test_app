import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { displayfarmer_product } from '../helper/api';import image8 from '../assets/8.png'
import image9 from '../assets/9.png'
import image10 from '../assets/10.png'
import image6 from '../assets/6.png';
import avater from '../assets/avater.svg';

export default function Header() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [user, setUser] = useState('');
	const [inputText, setInputText] = useState('');
	const [, setClick] = useState('');
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	console.log(firstName);
	console.log(lastName);
	// console.log(user);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem('user')) || [];
		setUser(storedUser);
		if (storedUser.id) {
			setFirstName(storedUser.firstname.split('')[0]);
			setLastName(storedUser.lastname.split('')[0]);
		}
	}, [setUser]);

	const getProducts = async () => {
		const response = await displayfarmer_product();
		const data = await response.json();
		setProducts(data.data.usersDetails);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const onHandleClick = (click) => {
		navigate(`/category/${click}`)
		setClick(click)
	}

    return (
			<div className='relative bg-white w-[1300px] h-[100px] mt-[40px] rounded-[20px]'>
				<div className='flex flex-col justify-center h-full'>
					<div className='flex flex-row justify-around w-full'>
						<div className='w-[10%]'>
							<Link to='/dashboard'>
								<img
									src={image6}
									className=' w-[85px] h-[35px]'
								/>
							</Link>
						</div>
						<div className='flex flex-col justify-around w-[50%]'>
							<div className='flex flex-col space-y-2 w-full border p-2 font-bold border-black rounded-[28px] justify-center header-search'>
								<input
									className='w-[90%]'
									type='text'
									placeholder='search...'
									onChange={(e) => setInputText(e.target.value)}
								/>
							</div>
							{inputText ? (
								<>
									{products
										.filter((value) =>
											value?.productname
												?.toLowerCase()
												.includes(inputText?.toLowerCase())
										)
										.map((value, index) => (
											<div key={index}>
												<div
													className='absolute p-4 bg-gray-100 hover:bg-gray-200 w-[640px]'
													onClick={() => onHandleClick(value?.productname)}>
													<p className='text-md font-bold'>
														{value?.productname}
													</p>
												</div>
												<hr className='border-2' />
											</div>
										))}
								</>
							) : (
								''
							)}
						</div>
						<div className='w-[25%] flex flex-row justify-center space-x-4'>
							<img
								src={image10}
								className='w-[35px] h-[35px] cursor-pointer'
							/>
							<img
								src={image9}
								className='ml-5 w-[35px] h-[35px] cursor-pointer'
							/>
							{user.firstname ? (
								<Link to='/profile'>
									<div className='flex items-center justify-center border-2 border-fuchsia-600 h-9 w-9 rounded-full'>
										<p className='text-xl font-thin text-fuchsia-700'>
											{firstName}
											{lastName}
										</p>
									</div>
								</Link>
							) : (
								<div>
									<img
										src={avater}
										alt={avater}
										className='h-8 w-8'
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
}
