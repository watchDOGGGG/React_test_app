import React from 'react';

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
				<div class='flex flex-col mt-5 space-y-3 font-bold'>
					<label for='phone'>Password</label>
					<input
						type='text'
						className='h-16 w-full border-2 rounded-2xl p-1'
					/>
				</div>

				<button className='h-16 w-full bg-green-500 text-center rounded-2xl mt-10 font-bold text-white'>
					Done
				</button>
				<button className='h-16 w-full border-2 text-center rounded-2xl mt-10 font-bold text-black'>
					Continue with email
				</button>
				<div className='flex flex-col text-center text-xs items-center justify-center font-bold mt-12 mb-8'>
					<p>By signing up you agree to our teams and conditions</p>
					<p>& privacy policy</p>
				</div>
			</div>
			<p className="text-xs mt-12">Already have an Account?</p>
			<div className='w-96 p-4 mb-10'>
				<button className='h-16 w-full border-2 text-center rounded-2xl mt-10 font-bold text-black'>
					Login
				</button>
			</div>
		</div>
	);
}
