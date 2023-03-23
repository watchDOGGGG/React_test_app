import React from 'react';
import Header from './../components/header';
import add from './../assets/add.svg';

export default function CreateAccount() {
	return (
		<div className='flex flex-col items-center justify-center mt-12'>
			<p className='text-7xl font-bold'>Create An Account</p>
			<div className='w-96 shadow-lg p-4 mt-10'>
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>First Name</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
					/>
				</div>
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>LastName</label>
					<input                                                                    
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
					/>
				</div>
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>Email Address</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
					/>
				</div>
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>Phone Number</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
					/>
				</div>
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>User Name</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
					/>
				</div>
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>Role</label>
					<select class='h-16 border-2 rounded-2xl p-1'>
						<option value=''>Customer</option>
						<option value='farmer'>Farmer</option>
					</select>
				</div>
			</div>
		</div>
	);
}
