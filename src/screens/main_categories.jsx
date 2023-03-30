import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { viewFarmerProducts, getSingleFarmer } from '../helper/api';
import { useParams } from 'react-router-dom';
import Footer from '../components/footer'
import Header from '../components/header'
import image20 from '../assets/20.png'


export default function MainCategory() {
    const { farmerId } = useParams();
    const [products, setProducts] = useState([]);
    const [farmer, setFarmer] = useState("");

    const getFarmer = async (id) => {
        const response = await getSingleFarmer(id);
        const data = await response.json();
        setFarmer(data);
    };

    const getProducts = async (id) => {
        const response = await viewFarmerProducts(id);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        getProducts(farmerId);
        getFarmer(farmerId);
    }, []);

    return (
			<div className='w-full'>
				<div className='cate-section-1 w-full h-[526px]'>
					<div className='flex flex-row justify-center'>
						<Header />
					</div>

					<div className='flex flex-row justify-center'>
						<img src={image20} />
					</div>
				</div>
				<div className='bg-[#F5F5F5]'>
					<div className='home-section-2 flex flex-row justify-center w-full'>
						<div className='flex flex-col w-[80%]'>
							{products?.results?.length > 0 ? (
								<h2 className='font-bold mt-[100px] text-4xl'>
									{`${farmer?.result?.firstname} ${farmer?.result?.lastname} Products`}
								</h2>
							) : (
								' '
							)}
							<>
								{products?.results?.length > 0 ? (
									<div className='grid grid-cols-4 gap-16 p-24 items-center justify-center'>
										{products?.results?.map((items, value) => (
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
								) : (
									<p className='text-5xl text-green-500 p-6'>
										{products?.message}
									</p>
								)}
							</>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
}
