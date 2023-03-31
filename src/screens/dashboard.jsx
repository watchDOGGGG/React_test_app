import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image6 from '../assets/6.png'
import Footer from '../components/footer'

export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem('user')) || [];
    const navigate = useNavigate();

    const onHandleFarmerClick = () => {
        if (user?.role === 'farmer') {
            navigate('/home')
        } else {
            navigate('/home');
            localStorage.removeItem('user');
        }
    }

    const onHandleCustomerClick = () => {
        if (user.role === 'customer') {
            navigate('/home')
        } else {
            navigate('/home');
            localStorage.removeItem('user');
        }
    }


    return (
			<div className=''>
				<div className='section-1 bg-[#F5F4EF] flex flex-row justify-center space-y-9'>
					<div className='w-[70%] flex flex-col items-center justify-center'>
						<div className='flex flex-row justify-center mt-[100px] mb-[104px]'>
							<img src={image6} />
						</div>
						<h2 className='text-center text-[59px] font-[800] leading-[72px]'>
							Bringing the <span className='text-[#0EB770]'>farmers</span> and{' '}
							<span className='text-[#0EB770]'>Customers</span> into one picture
						</h2>
						<p className='text-center text-[#25313C] mt-[50px] text-xl'>
							A tool that enables Farmers and End-Users (Customers) to engage in
							a form of exchange (buying and selling) of goods, fostering
							positive relationships between them, lowering the rate of
							inflation, and creating a favorable environment for trade.
						</p>

						<button
							onClick={onHandleCustomerClick}
							className='flex flex-row mt-28 p-3 text-center w-64 text-white rounded-full font-extrabold bg-green-700 justify-center'>
							<p>Proceed as Customer</p>
						</button>

						<div className='flex flex-row justify-center mt-[60px]'>
							<img
								src={image1}
								className='w-[500px] '
							/>
						</div>
					</div>
				</div>
				<div className='section-2 mt-36 flex flex-row justify-center'>
					<div className='w-[70%] flex flex-col'>
						<h2 className='text-center text-[59px] font-[800]'>
							Agro-link's services
						</h2>
						<p className='text-center text-[#25313C] text-xl mt-3'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>

						<div className='flex flex-row justify-around mt-[105px] text-xl'>
							<div className='flex flex-col p-3'>
								<h3 className='font-[600]'>Trust between the two parties.</h3>
								<p className='text-sm text-[#333333] mt-1'>
									<span>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</span>
								</p>
							</div>
							<div className='flex flex-col p-3'>
								<h3 className='font-bold'>Trust between the two parties.</h3>
								<p className='text-sm text-[#333333] mt-1'>
									<span>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</span>
								</p>
							</div>
							<div className='flex flex-col p-3'>
								<h3 className='font-bold'>Trust between the two parties.</h3>
								<p className='text-sm text-[#333333] mt-1'>
									<span>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img src={image2} />
				</div>
				<div className='section-3 mt-[100px] flex flex-row justify-center'>
					<div className='flex flex-col items-center justify-center'>
						<div className='flex flex-col items-center justify-center'>
							<h2 className='flex flex-row text-center text-[59px] font-[800] leading-[72px]'>
								Helping you get the{' '}
								<span className='text-[#0EB770]'> Perfect </span> Market
							</h2>
							<p className='text-[#25313C] mt-5'>
								connecting you with millions of customers in Nigeria and around
								the world. providing a platform for you to upload
							</p>
							<p>
								product images and sell your product to customers without any
								hassle.
							</p>
						</div>
						<button
							onClick={onHandleFarmerClick}
							className='flex flex-row mt-16 p-3 text-center w-64 text-white rounded-full font-extrabold bg-green-700 justify-center'>
							<p>Proceed as Farmer</p>
						</button>

						<div className='flex flex-row justify-center mt-[201px]'>
							<img
								src={image3}
								className='w-[700px] '
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
}
