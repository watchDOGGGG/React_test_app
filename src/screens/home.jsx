import React, {useState, useEffect} from 'react';
import { displayfarmer_product, getAllFarmer} from '../helper/api';
import Footer from '../components/footer'
import Header from '../components/header'
import { Link } from 'react-router-dom'

export default function Home() {
	const [users, setUsers] = useState(null);
	const [products, setProducts] = useState(null);
	const [farmers, setFarmers] = useState(null);

	const getAllProduct = async () => {
		const response = await displayfarmer_product();
		const data = await response.json(); // extract the JSON data from the response
		setProducts(data.data.usersDetails);
	};

	const getAllFarmers = async () => {
		const response = await getAllFarmer();
		const data = await response.json(); // extract the JSON data from the response
		setFarmers(data);
	};

	useEffect(() => {
		getAllFarmers();
		getAllProduct();
	}, []);

	useEffect(() => {
		if (farmers) {
			const arrObject = Object.values(farmers?.result);
			setUsers(arrObject);
		}
	}, [farmers]);



    return (
			<div className='w-full'>
				<div className='home-section-1 w-full h-[526px]'>
					<div className='flex flex-row justify-center'>
						<Header />
					</div>
				</div>
				<div className='bg-[#F5F5F5]'>
					<div className='home-section-2 flex flex-row justify-center w-full'>
						<div className='flex flex-col w-[80%]'>
							<h2 className='font-bold mt-[100px] text-xl'>
								Explore Top Dealer’s{' '}
								<span className='w-[1px] h-[18px] text-[#0EB770] ml-[11px]'>
									|
								</span>
								<span className='text-[#25313C] text-lg'>See More</span>
							</h2>

							<div className='mt-[20px] flex flex-row justify-between'>
								{users?.slice(0, 4).map((values, index) => (
									<Link
										to={`/category/${values.role_id}`}
										className='flex flex-col w-[267px]'
										key={index}>
										<div className='flex flex-row justify-center'>
											<img
												src={`http://localhost:5173/uploads/${values.filename}`}
												className='rounded-full h-44 w-44'
											/>
										</div>
										<div className='text-center mt-[36px] leading-[27px] font-[700] text-[20px]'>
											<h3>{values.farmername}</h3>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>

					<div className='home-section-3 flex flex-row justify-center w-full'>
						<div className='flex flex-col w-[80%]'>
							<h2 className='font-bold mt-[100px] text-xl'>
								Explore Top Products
							</h2>

							<div className='mt-[20px] flex flex-row justify-between'>
								{products?.slice(0, 4).map((items, index) => (
									<Link to={`/product/${items.id}`}>
										<div
											className='flex flex-col w-[267px]'
											key={index}>
											<div className='flex flex-row justify-center'>
												<img
													src={`http://localhost:5173/uploads/${items.filename}`}
													className='rounded-full h-44 w-44'
												/>
											</div>
											<div className='text-center mt-[36px] leading-[27px] font-[700] text-[20px]'>
												<h3>{items.productname}</h3>
											</div>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>

					<div className='home-section-4 flex flex-row justify-center w-full mb-[256px]'>
						<div className='flex flex-col w-[80%]'>
							<h2 className='font-bold mt-[100px] text-xl'>Daily Deals</h2>

							<div className='mt-[20px] grid grid-cols-3 gap-4 space-x-2 space-y-4 items-center justify-center'>
								{products?.map((items, value) => (
									<Link to={`product/${items.id}`}>
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
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
}
