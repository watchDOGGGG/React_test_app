import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
	viewSingleProduct, 
	displayfarmer_product,
	getSingleFarmer
} from '../helper/api';
import Footer from '../components/footer'
import Header from '../components/header'
import Loader from '../assets/loader.gif'
import image23 from '../assets/avater.svg'

export default function ProductOverview() {
	const user = JSON.parse(localStorage.getItem('user')) || null;
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const [products, setProducts] = useState([]);
	const [farmer, setFarmer] = useState(null);
	const [check, setCheck] = useState(false);

	const getProduct = async (id) => {
		const response = await viewSingleProduct(id);
		const data = await response.json();
		setProduct(Object.assign({}, ...data?.results));
		if (user.role === 'farmer'){
			setCheck(true);
		}
	};

	const getProducts = async () => {
		const response = await displayfarmer_product();
		const data = await response.json();
		setProducts(data.data.usersDetails);
	};

	const getFarmer = async (id) => {
		const response = await getSingleFarmer(id);
		const data = await response.json();
		setFarmer(data?.result);
	};

	const onHandleConnectFarmer = (id) => {
		if (user?.role === 'customer') {
			navigate(`/farmerContact/${id}`);
		} else {
			navigate('/createAccount')
		}
	};

	useEffect(() => {
		getProduct(id);
		getProducts();
	}, [id]);

	useEffect(() => {
		if (product) {
			getFarmer(product.farmer_id);
		}
	}, [product]);



    return (
			<>
				{product ? (
					<div className='w-full'>
						<div className='cate-section-1 w-full'>
							<div className='flex flex-row justify-center'>
								<Header />
							</div>
						</div>
						<div className='bg-[#F5F5F5]'>
							<div className='home-section-4 flex flex-row justify-center '>
								<div className='w-[90%] flex flex-row'>
									<div className='w-[70%]'>
										<div>
											<img
												// src={image22}
												src={`http://localhost:5173/uploads/${product.filename}`}
												className='h-[677px] w-[763px]'
											/>
										</div>
										<div className='font-[800] text-[69px]'>
											<span>{product.productname}</span>
										</div>
										<div className='flex flex-row space-x-16 text-2xl text-bold'>
											<span>Promoted</span>
											<span>Posted 3 hours</span>
											<span>Lagos, Ikeja</span>
										</div>

										<div className='flex flex-row mt-[109px] space-x-44'>
											<div className='flex flex-col text-xl'>
												<span>{`Title: ${product?.productname}`}</span>
												<span>{`Type: ${product?.type}`}</span>
											</div>

											<div className='flex flex-row items-center justify-center space-x-2 text-xl'>
												<span>Quantity :</span>
												<span>{product?.quantity}</span>
											</div>
										</div>

										<div className='mt-[42px]'>
											<p className='font-bold'>{product?.description}</p>
										</div>

										<div className='mt-[45px] flex flex-col'>
											{user?.role ? (
												<button
													onClick={() =>
														onHandleConnectFarmer(product.farmer_id)
													}
													disabled={check}
													className={`bg-[#3E7857] w-[268px] h-[69.98px] leading-[29.37px] text-white text-center rounded-[30px]`}>
													<div className='flex flex-col justify-center'>
														<div className='font-[800] text-[18px]'>
															{farmer?.phone}
														</div>
													</div>
												</button>
											) : (
												<button
													onClick={() =>
														onHandleConnectFarmer(product.farmer_id)
													}
													className='bg-[#3E7857] w-[268px] h-[69.98px] leading-[29.37px] text-white text-center rounded-[30px]'>
													<div className='flex flex-col justify-center'>
														<div className='font-[800] text-[18px]'>
															Show Contact
														</div>
													</div>
												</button>
											)}
										</div>

										<div className='mt-[20.2px] flex flex-col'>
											<div className='border-2 border-black w-[268px] h-[69.98px] leading-[29.37px] text-black text-center rounded-[30px]'>
												<div className='flex flex-col justify-center'>
													<div className='flex items-center justify-center font-[800] text-[18px] pt-[20px] text-center'>
														Make an Offer
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* right */}
									<div className='w-[367px]'>
										<div className='bg-white w-full p-[24px]'>
											<div>
												<span className='font-[800] text-[30px]'>{`₦${product.price}`}</span>
												<div className='mt-[20.2px] flex flex-col'>
													<div className='border-2 border-black  leading-[29.37px] text-black text-center rounded-[30px] p-2'>
														<span className='font-[800] text-[18px]'>
															Market price: ₦ 159.5 K ~ 170 K
														</span>
													</div>
												</div>
												<div className='mt-[20.2px] flex flex-col'>
													<div className='bg-[#0EB770]  leading-[29.37px] text-white text-center rounded-[30px] p-2'>
														<span className='font-[800] text-[18px]'>
															Request Call Back
														</span>
													</div>
												</div>
											</div>
										</div>

										<div className='bg-white w-full p-[24px] mt-[20px]'>
											<div>
												<div className='flex flex-row'>
													<div className='mr-[13.62px]'>
														{user?.role ? (
															<button
																onClick={() =>
																	onHandleConnectFarmer(product.farmer_id)
																}>
																<img
																	src={`http://localhost:5173/uploads/${farmer?.filename}`}
																	className='w-12 h-12 rounded-full'
																/>
															</button>
														) : (
															<img
																src={`http://localhost:5173/uploads/${farmer?.filename}`}
																className='w-12 h-12 rounded-full'
															/>
														)}
													</div>
													<div className='flex flex-col'>
														<span className='font-[600] text-[16px]'>
															{product.farmername}
														</span>
														<span className='font-[600] text-[16px]'>
															Typically replies within a day
														</span>
														<span className='font-[600] text-[16px]'>
															1y 6m on Jiji
														</span>
													</div>
												</div>
												<div className='mt-[20.2px] flex flex-col'>
													{user?.role ? (
														<button
															disabled={check}
															onClick={() =>
																onHandleConnectFarmer(product.farmer_id)
															}
															className={`bg-[#0EB770] leading-[29.37px] text-white text-center rounded-[30px] p-2`}>
															<span className={`font-[800] text-[18px]`}>
																{farmer?.phone}
															</span>
														</button>
													) : (
														<div
															onClick={() =>
																onHandleConnectFarmer(product.farmer_id)
															}
															className={` bg-[#0EB770]  leading-[29.37px] text-white text-center rounded-[30px] p-2`}>
															<span className='font-[800] text-[18px]'>
																Show Contact
															</span>
														</div>
													)}
												</div>

												<div className='mt-[20.2px] flex flex-col'>
													<div className='border-[#0EB770] border-2  leading-[29.37px] text-[#0EB770] text-center rounded-[30px] p-2'>
														<span className='font-[800] text-[18px]'>
															Start Chat
														</span>
													</div>
												</div>
											</div>
										</div>

										<div className='bg-white w-full p-[24px] mt-[20px]'>
											<div>
												<div className='flex flex-row justify-center p-3'>
													<div>
														<h2 className='font-[700] text-[20px] text-center'>
															SAFETY TIPS
														</h2>
														{SafetyList.map((item, i) => (
															<li className='text-justify font-[600] text-[16px]'>
																{item}
															</li>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='home-section-4 flex flex-row justify-center w-full mb-[256px]'>
								<div className='flex flex-col w-[80%]'>
									<h2 className='font-bold mt-[100px] text-6xl'>Daily Deals</h2>

									<div className='grid grid-cols-4 gap-16 p-24 items-center justify-center'>
										{products
											?.slice(0, 4)
											.reverse()
											.map((items, value) => (
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
								</div>
							</div>
							<Footer />
						</div>
					</div>
				) : (
					<img
						src={Loader}
						alt={Loader}
						className=' m-auto h-10 w-12 mt-11'
					/>
				)}
			</>
		);
}


const SafetyList = [
  "Don't pay in advance, including for delivery",
  "Meet the seller at a safe public place",
  "Inspect the item and ensure it's exactly what you want",
  "On delivery, check that the item delivered is what was inspected",
  "Only pay when you're satisfied"
]