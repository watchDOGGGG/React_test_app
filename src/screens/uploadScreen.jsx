import React, { useState } from 'react';
import uploadCloud from './../assets/cloud-upload.svg';

export default function UploadScreen() {
	return (
		<div className='p-6'>
			<div className='flex flex-col items-center justify-center text-center'>
				<h1 className='text-6xl font-bold mt-10'>Uploading Document</h1>
				<div className='text-green-500 text-sm font-bold mt-5'>
					<h2>Please we will love you to upload the following</h2>
					<h2>document to show your legitimatcy</h2>
				</div>
				<div className='shadow-lg bg-white p-12 mt-10'>
					<p className='font-bold'>Upload</p>
					<div className='flex flex-col border-black-2 p-6 pt-24 pb-24 mt-8 border-dashed border-2 border-gray-400 bg-slate-100 text-center items-center justify-center'>
						<img
							src={uploadCloud}
							alt={uploadCloud}
							className='h-16 w-16'
						/>
						<div className='flex flex-row space-x-1 text-center justify-center mt-8'>
							<p className='font-medium'>Drag and drop or</p>
							<p className='text-green-500 font-medium underline'>Browse</p>
						</div>
						<p className='text-xs text-gray-300 mt-2'>
							Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
						</p>
					</div>
					<button className='bg-green-500 text-white mt-8 w-full h-12 rounded-md'>
						UPLOAD FILES
					</button>
				</div>
				<div className='text-3xl mt-6 font-medium space-y-2'>
					<p>● National Identity Card (NID)</p>
					<p>● Birth Cateficate </p>
					<p>● Voter's Card</p>
					<p>● Driver's Lincences</p>
				</div>
				<button className='bg-green-500 text-white mt-10 h-12 rounded-full font-bold w-[500px]'>
					Confirm
				</button>
				<div className='font-medium mt-3'>
					<p>By signing up you accept our teams and conditions</p>
					<p>& privacy policy</p>
				</div>
			</div>
		</div>
	);
}
