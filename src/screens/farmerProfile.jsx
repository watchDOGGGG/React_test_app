import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import notification from '../assets/notification.svg';
import chat from '../assets/chat.svg';
import bookmark from '../assets/bookmark.svg'

export default function FarmerProfile() {
	const user = JSON.parse(localStorage.getItem('user')) || [];
	console.log(user);

	return (
		<div>
			<Header />
			<div className='flex flex-col items-center justify-center p-6'>
				<div className='border-2 h-36 w-36 rounded-full'></div>
				<div className='flex flex-col text-center text-2xl font-extrabold mt-10'>
					<p>Farmer's Name: Isreal Poutry</p>
					<p>Framers ID: #245461</p>
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
			</div>
			{user.role === 'customer' ? (
				<div className='flex flex-row items-center justify-end p-12 mb-12'>
					<button className='p-3 font-bold text-white w-40 bg-black rounded-full -mt-10'>
						create post
					</button>
				</div>
			) : (
				''
			)}
		</div>
	);
}
