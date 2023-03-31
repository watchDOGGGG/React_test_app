import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleFarmer, viewFarmerProducts } from "../helper/api";
import Header from "../components/header";
import Footer from "../components/footer";

export default function FarmerContact() {
    const { id } = useParams();
	const [farmer, setFarmer] = useState(null);
	const [products, setProducts] = useState([]);
	console.log(products)

    const getFarmer = async (id) => {
		const response = await getSingleFarmer(id);
		const data = await response.json();
		setFarmer(data?.result);
    };

	const getProducts = async () => {
		const response = await viewFarmerProducts(id);
		const data = await response.json();
		setProducts(data?.results);
	};
    
    useEffect(() => {
        getFarmer(id);
        getProducts(id);
    }, [id]);

    
    return (
			<div className="flex flex-col items-center justify-center">
			<Header />
				{farmer && products.length > 0 ? (
					<>
						<div className='flex flex-row bg-gray-100 items-center justify-center p-16 '>
							<div className='w-1/4 p-1'>
								<div className='flex flex-col items-center justify-center '>
									<div className='flex items-center justify-center'>
										<img
											src={`http://localhost:5173/uploads/${farmer.filename}`}
											alt={`http://localhost:5173/uploads/${farmer.filename}`}
											className='w-44 h-44 rounded-full'
										/>
									</div>
									<p className='text-2xl font-extrabold mt-7'>{`Farmer ID: ${farmer.role_id}`}</p>
									<button className='bg-green-500 w-full mt-7 p-5 text-3xl text-white font-extrabold rounded-full '>
										Show Contact
									</button>
									<button className='w-full p-5 text-3xl mt-4 text-black font-extrabold rounded-full border-2 border-black'>
										Leave Feedback
									</button>
								</div>
								<div className='flex flex-col justify-start space-y-9 mt-16'>
									<div className='flex flex-col justify-start space-y-4'>
										<p className='text-2xl font-extrabold'>More Details</p>
										<div className='text-xl text-black font-bold space-y-2'>
											<p>Farmer's name:</p>
											<p>
												{farmer.firstname} {farmer.lastname}
											</p>
										</div>
									</div>
									<div className='flex flex-col justify-start space-y-4'>
										<p className='text-2xl font-extrabold'>Farmer Category</p>
										<div className='text-xl text-black font-bold space-y-2'>
											<p>Fish Farmer</p>
										</div>
									</div>
									<div className='flex flex-col justify-start space-y-4'>
										<p className='text-2xl font-extrabold'>Farmer ID</p>
										<div className='text-xl text-black font-bold space-y-2'>
											<p>#{farmer.role_id}</p>
										</div>
									</div>
									<div className='flex flex-col justify-start space-y-4'>
										<p className='text-2xl font-extrabold'>STORE ADDRESS</p>
										<div className='text-xl text-black font-bold space-y-2'>
											<p>5, Noma Street Gra</p>
											<p>Edo G.R.A, 950135,</p>
											<p>Nigeria</p>
										</div>
									</div>
									<div className='flex flex-col justify-start space-y-4'>
										<p className='text-2xl font-extrabold'>STORE ADDRESS</p>
										<div className='text-xl font-bold space-y-2 text-green-500'>
											<p>MON TUES WED</p>
											<p>THU FRI</p>
										</div>
									</div>
								</div>
							</div>
							<div className='w-3/4'>
								<div className='mt-[20px] grid grid-cols-4 gap-16 m-5 items-center justify-center'>
									{products?.map((items, value) => (
										<Link
											to={`/product/${items.id}`}
											key={value}>
											<div className='flex flex-col bg-white p-4 rounded-xl'>
												<img
													src={`http://localhost:5173/uploads/${items.filename}`}
													className='h-64 w-full'
												/>
												<div className='flex flex-col mt-[20px] font-[700] text-[20px]'>
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
					</>
				) : (
					''
				)}
				<Footer />
			</div>
		);
}