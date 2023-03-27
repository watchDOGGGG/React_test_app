import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleFarmer, displayfarmer_product } from "../helper/api";
import Header from "../components/header";
import Footer from "../components/footer";

export default function FarmerContact() {
    const { id } = useParams();
	const [farmer, setFarmer] = useState(null);
	const [user, setUser] = useState('')
	const [products, setProducts] = useState([]);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	console.log(firstName);
	console.log(lastName);
	// console.log(user);

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem('user')) || [];
		setUser(storedUser);
		if (storedUser.id) {
			setFirstName(storedUser.firstname.split('')[0]);
			setLastName(storedUser.lastname.split('')[0]);
		}
	}, [setUser]);

    const getFarmer = async (id) => {
		const response = await getSingleFarmer(id);
		const data = await response.json();
		setFarmer(data?.result);
    };

	const getProducts = async () => {
		const response = await displayfarmer_product();
		const data = await response.json();
		setProducts(data.data.usersDetails);
	};
    
    useEffect(() => {
        getFarmer(id);
        getProducts();
    }, [id]);

    
    return (
			<div>
				<Header />
				{farmer && products.length > 0 ? (
					<>
						<div className='flex flex-row items-center justify-center p-12 '>
							<div className='w-1/4 p-1'>
								<div className='flex flex-col items-center justify-center '>
									<div className='flex items-center justify-center text-fuchsia-700 text-7xl font-bold h-36 w-36 p-4 border-2 rounded-full '>
										<p>
											{firstName}{lastName}
										</p>
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
							<div className='w-3/4 p-1'>
								<div className='mt-[20px] grid grid-cols-3 gap-5 space-y-4 space-x-8 items-center justify-center'>
									{products?.map((items, value) => (
										<Link
											to={`/product/${items.id}`}
											key={value}>
											<div className='flex flex-col bg-white p-[7.5px] rounded-t-xl'>
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
					</>
				) : (
					''
				)}
				<Footer />
			</div>
		);
}