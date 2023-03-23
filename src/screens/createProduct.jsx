import React from 'react';
import Header from './../components/header';
import add from './../assets/add.svg';

export default function UploadScreen() {
	return (
		<div className='pl-12 pr-12'>
			<Header />
			<div className='p-7 mt-12'>
				<div className='flex items-center justify-center text-center w-full h-20 bg-green-500 rounded-2xl'>
					<p className='text-white font-extrabold text-2xl'>Product Details</p>
				</div>
				<div className='flex flex-row items-center justify-between mt-10'>
					<div className='space-y-3 w-1/2 pr-10'>
						<p>Category</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-2xl p-1'
						/>
					</div>
					<div className='space-y-3 w-1/2 pl-10'>
						<p>Select Product</p>
						<input
							type='text'
							className='h-16 w-full border-2 rounded-2xl p-1'
						/>
					</div>
				</div>
				<div className='mt-10'>
					<p className='text-2xl font-bold'>Add Photo</p>
					<p>Add at least 1 photo for this category</p>
					<p>
						First picture - Is the title picture. You can change the order by
						just drag and drop
					</p>
				</div>
				<div className='flex items-center mt-8 text-ceneter p-2 h-16 w-16 border-black rounded-full border-2'>
					<img
						src={add}
						alt={add}
						className='h-12 w-12'
					/>
				</div>
				<div className='mt-4'>
					<p>each picture must not exceed 5 Mb</p>
					<p>Supported formats are *jpg and *png</p>
				</div>
				<div className='space-y-10'>
					<div className='flex flex-row items-center justify-between mt-6'>
						<div className='space-y-3 w-1/2 pr-16'>
							<p>Title</p>
							<input
								type='text'
								className='h-16 w-full border-2 rounded-2xl p-1'
							/>
						</div>
						<div className='space-y-3 w-1/2 pl-16'>
							<p>Type</p>
							<input
								type='text'
								className='h-16 w-full border-2 rounded-2xl p-1'
							/>
						</div>
					</div>
					<div className='space-y-3'>
						<p>Description</p>
						<input
							type='text'
							className='h-44 w-full border-2 rounded-2xl p-1'
						/>
					</div>
                    <div className='space-y-3 w-1/2 pr-10'>
                        <p>Price</p>
                        <input
                            type='text'
                            className='h-16 w-full border-2 rounded-2xl p-1'
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-28 mb-12">
                    <button className="w-80 bg-black text-white h-16 rounded-full text-2xl font-bold">Next</button>
                </div>
			</div>
		</div>
	);
}