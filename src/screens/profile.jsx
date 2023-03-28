import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { viewFarmerProducts } from '../helper/api';
import Header from '../components/header';
import notification from '../assets/notification.svg';
import chat from '../assets/chat.svg';
import bookmark from '../assets/bookmark.svg'

export default function Profile() {
	const user = JSON.parse(localStorage.getItem('user')) || [];
	const [product, setProduct] = useState();

	const getFramersProduct = async (id) => {
		const res = await viewFarmerProducts(id);
		const finalRes = await res.json();
		setProduct(finalRes);
	}


	useEffect(() => {
		getFramersProduct(user.role_id);
	}, []);

	return (
		<div>
			<Header />
			<div className='flex flex-col items-center justify-center p-6'>
				<div className='flex items-center justify-center'>
					<img
						src={`http://localhost:5173/uploads/${user.filename}`}
						alt={`http://localhost:5173/uploads/${user.filename}`}
						className='w-44 h-44 rounded-full'
					/>
				</div>
				<div className='flex flex-col text-center text-2xl font-extrabold mt-10'>
					<p>{`${user.role === 'farmer' ? 'Farmer' : 'Customer'}'s name: ${
						user.firstname
					} ${user.lastname}`}</p>
					{user.role === 'farmer' && <p>{`Farmer's ID: ${user.role_id}`}</p>}
					{user.role === 'customer' && (
						<p>{`Customer's ID: ${user.role_id}`}</p>
					)}
					{/* <p>{`Farmer's ID: ${user.farmer_id ? user.farmer_id : user.customer_id}`}</p> */}
				</div>
				<div className='flex flex-row items justify-center text-center space-x-2 mt-16'>
					<button>
						<img
							src={chat}
							alt={chat}
							className='h-8 w-8'
						/>
					</button>
					<hr className='w-12 border-black font-extrabold mt-4' />
					<button>
						<img
							src={notification}
							alt={notification}
							className='h-8 w-8'
						/>
					</button>
					<hr className='w-12 border-black font-extrabold mt-4' />
					<button>
						<img
							src={bookmark}
							alt={bookmark}
							className='h-8 w-8'
						/>
					</button>
				</div>
				{user.role === 'farmer' ? (
					<>
						<Link to='/createProduct'>
							<button className='p-3 font-bold text-white w-40 bg-black rounded-full mt-10'>
								create post
							</button>
						</Link>
						<p className='font-bold mt-8 text-2xl'>Posted Product</p>
					</>
				) : (
					''
				)}

				{product && user.role === 'farmer' && (
					<div className='mt-[20px] grid grid-cols-3 gap-4 space-x-2 space-y-4 items-center justify-center'>
						{product?.results?.map((items, value) => (
							<Link to={`/product/${items.id}`}>
								<div
									key={value}
									className='flex flex-col w-[268px] bg-white p-[7.5px] rounded-t-xl'>
									<div className='flex flex-row justify-center'>
										<img
											src={`http://localhost:5173/uploads/${items.filename}`}
											// className='rounded-full h-44 w-44'
										/>
									</div>
									<div className='flex flex-col text-left mt-[20px] leading-[27px] font-[700] text-[20px]'>
										<h3>{`Basket of ${items.productname}`}</h3>
										<span className='text-[#0EB770] text-[18px]'>
											{`₦${items.price}`}
										</span>
										<div className='flex flex-row'>
											<span className='text-[#6F6F6F] line-through text-[16px] font-[400]'>
												# 20,000
											</span>
											<div className='text-[#CB77D9] font-[400] text-[11px] w-[29px] pl-1 text-center bg-[#CB77D9] bg-opacity-[0.1] ml-[0.6px]'>
												<span>-50%</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
			{user.role === 'customer' ? (
				<Link to={`/main/product`}>
					<div className='flex flex-row items-center justify-end p-12 mb-12'>
						<button className='p-3 font-bold text-white w-40 bg-black rounded-full -mt-10'>
							Keep Shopping
						</button>
					</div>
				</Link>
			) : (
				''
			)}
		</div>
	);
}
