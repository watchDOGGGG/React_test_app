import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { displayfarmer_product } from '../helper/api';
import Footer from '../components/footer'
import Header from '../components/header'
import image16 from '../assets/16.png'
import image21 from '../assets/21.png'

export default function MainProduct() {
    const [products, setProducts] = useState([]);
    
    const getProducts = async () => {
		const response = await displayfarmer_product();
		const data = await response.json();
		setProducts(data.data.usersDetails);
	};
    
    useEffect(() => {
        getProducts();
    }, []);

    return (
			<div className='w-full'>
				<div className='cate-section-1 w-full h-[526px]'>
					<div className='flex flex-row justify-center'>
						<Header />
					</div>

					<div className='flex flex-row justify-center'>
						<img src={image21} />
					</div>
				</div>
				<div className='bg-[#F5F5F5]'>
					<div className='mt-[20px] grid grid-cols-4 gap-16 p-24 items-center justify-center'>
						{products?.map((items, value) => (
							<Link
								to={`/product/${items.id}`}
								key={value}>
								<div className='flex flex-col bg-white p-4 rounded-xl'>
									<img
										src={`http://localhost:5173/uploads/${items.filename}`}
										className='h-64 w-full'
									/>
									<div className='flex flex-col text-left mt-[20px] font-[700] text-[20px]'>
										<h3>{items.productname}</h3>
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
					<Footer />
				</div>
			</div>
		);
}
