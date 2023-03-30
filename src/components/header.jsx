import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { displayfarmer_product } from '../helper/api';
import image8 from '../assets/8.png';
import image9 from '../assets/9.png';
import home from '../assets/home.svg';
import image6 from '../assets/6.png';
import avater from '../assets/avater.svg';
import logout from '../assets/logout.svg';

export default function Header() {
    const user = JSON.parse(localStorage.getItem('user')) || [];
	const [inputText, setInputText] = useState('');
	const [, setClick] = useState('');
	const [products, setProducts] = useState([]);
	const navigate = useNavigate();
	// console.log(user);

	const getProducts = async () => {
		const response = await displayfarmer_product();
		const data = await response.json();
		setProducts(data.data.usersDetails);
	};

	useEffect(() => {
		getProducts();
	}, []);

	const onHandleClick = (click) => {
		navigate(`/product/${click}`);
		setClick(click);
	};

	const handleLogout = () => {
		localStorage.removeItem('user');
	}

	return (
		<div className='relative bg-white w-full pl-28 pr-28 h-[100px] mt-[40px] rounded-[20px]'>
			<div className='flex flex-col justify-center h-full'>
				<div className='flex flex-row justify-around w-full'>
					<div className='w-[10%]'>
						<Link to='/'>
							<img
								src={image6}
								className=' w-[85px] h-[35px]'
							/>
						</Link>
					</div>
					<div className='flex flex-col justify-around w-[50%]'>
						<div className='flex flex-col space-y-2 w-full border p-2 font-bold border-black rounded-[28px] justify-center header-search'>
							<input
								className='w-[90%] p-1'
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
											<Link to={`/searchResult/${value?.productname}`}>
												<div
													className='absolute p-4 bg-gray-100 hover:bg-gray-200 w-[640px]'
													onClick={() => onHandleClick(value?.id)}>
													<p className='text-md font-bold'>
														{value?.productname}
													</p>
												</div>
											</Link>
											<hr className='border-2' />
										</div>
									))}
							</>
						) : (
							''
						)}
					</div>
					<div className='w-[25%] flex flex-row items-center justify-center space-x-4'>
						<Link to='/main/product'>
							<img
								src={home}
								className='w-[35px] h-[35px] cursor-pointer'
							/>
						</Link>
						{user.firstname ? (
							<Link to='/profile'>
								<div className='flex items-center justify-center'>
									<img
										src={`http://localhost:5173/uploads/${user.filename}`}
										alt={`http://localhost:5173/uploads/${user.filename}`}
										className='w-12 h-12 rounded-full'
									/>
								</div>
							</Link>
						) : (
							<Link to='/createAccount'>
								<div>
									<img
										src={avater}
										alt={avater}
										className='h-8 w-8'
									/>
								</div>
							</Link>
						)}
						<Link to='/'>
							<img
								src={logout}
								className='w-[35px] h-[35px] cursor-pointer'
								onClick={handleLogout}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
