import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image6 from '../assets/6.png'
import Footer from '../components/footer'

export default function Dashboard() {
    return (
        <div>
            <div className="section-1 h-[100vh] bg-[#F5F4EF] flex flex-row justify-center">
                <div className="w-[70%] flex flex-col">
                    <div className="flex flex-row justify-center mt-[100px] mb-[104px]">
                        <img src={image6} />
                    </div>
                    <h2 className="text-center text-[59px] font-[800] leading-[72px]">Bringing the <span className="text-[#0EB770]">farmers</span> and <span className="text-[#0EB770]">Customers</span> into one picture</h2>
                    <p className='text-center text-[#25313C] mt-[50px]'>
                        A tool that enables Farmers and End-Users (Customers) to engage in a form of exchange (buying and selling) of goods, fostering positive relationships between them, lowering the rate of inflation, and creating a favorable environment for trade.
                    </p>

                    <div className="flex flex-row justify-center mt-[30px]">
                        <Link to="/home" className="bg-[#0EB770] rounded-[30px] text-center pt-[20px] pl-[34px] pb-[30px] pr-[34px] text-[10px] font-[800] w-[200px] h-[30px]">Proceed as Customer</Link>
                    </div>

                    <div className="flex flex-row justify-center mt-[60px]">
                        <img src={image1} className="w-[500px] " />
                    </div>
                </div>
            </div>
            <div className="section-2 mt-[30%] flex flex-row justify-center">
                <div className="w-[70%] flex flex-col">
                    <h2 className="text-center text-[59px] font-[800]">Agro-link's services</h2>
                    <p className='text-center text-[#25313C]'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>

                    <div className="flex flex-row justify-around mt-[105px]">
                        <div className="flex flex-col w-[300px]">
                            <h3 className="font-[600]">Trust between the two parties.</h3>
                            <p className="text-sm text-[#333333] mt-1">
                                <span>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col w-[300px]">
                            <h3 className="font-[600]">Trust between the two parties.</h3>
                            <p className="text-sm text-[#333333] mt-1">
                                <span>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col w-[300px]">
                            <h3 className="font-[600]">Trust between the two parties.</h3>
                            <p className="text-sm text-[#333333] mt-1">
                                <span>
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <img src={image2} />
            </div>
            <div className="section-3 mt-[100px] flex flex-row justify-center">
                <div className="w-[70%] flex flex-col">
                    <h2 className="text-center text-[59px] font-[800] leading-[72px]">Helping you get the <span className="text-[#0EB770]">Perfect</span> Market</h2>
                    <p className='text-center text-[#25313C]'>
                        connecting you with millions of customers in Nigeria and around the world.
                        providing a platform for you to upload product images and sell your product to customers without any hassle.
                    </p>

                    <div className="flex flex-row justify-center mt-[30px]">
                        <Link to="/home" className="bg-[#0EB770] rounded-[30px] text-center pt-[20px] pl-[34px] pb-[30px] pr-[34px] text-[10px] font-[800] w-[200px] h-[30px]">Proceed as Customer</Link>
                    </div>

                    <div className="flex flex-row justify-center mt-[201px]">
                        <img src={image3} className="w-[700px] " />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
