import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import image11 from '../assets/11.png'
import image12 from '../assets/12.png'
import image13 from '../assets/13.png'
import image15 from '../assets/15.png'
import image16 from '../assets/16.png'
import image17 from '../assets/17.png'
import image18 from '../assets/18.png'
import image19 from '../assets/19.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="w-full">
            <div className="home-section-1 w-full h-[526px]">
                <div className="flex flex-row justify-center">
                    <Header />
                </div>
            </div>
            <div className='bg-[#F5F5F5]'>
                <div className="home-section-2 flex flex-row justify-center w-full">
                    <div className="flex flex-col w-[80%]">
                        <h2 className="font-bold mt-[100px] text-xl">Explore Top Dealer’s <span className="w-[1px] h-[18px] text-[#0EB770] ml-[11px]">|</span><span className="text-[#25313C] text-lg">See More</span></h2>

                        <div className="mt-[20px] flex flex-row justify-between">
                            <Link to="/category/1" className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image11} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Isreal Poultry’s</h3>
                                </div>
                            </Link>

                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image12} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Isreal Poultry’s</h3>
                                </div>
                            </div>

                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image13} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Isreal Poultry’s</h3>
                                </div>
                            </div>

                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image11} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Isreal Poultry’s</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-section-3 flex flex-row justify-center w-full">
                    <div className="flex flex-col w-[80%]">
                        <h2 className="font-bold mt-[100px] text-xl">Explore Top Products</h2>

                        <div className="mt-[20px] flex flex-row justify-between">
                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image15} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Seedlings</h3>
                                </div>
                            </div>

                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image15} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Seedlings</h3>
                                </div>
                            </div>

                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image15} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Seedlings</h3>
                                </div>
                            </div>

                            <div className="flex flex-col w-[267px]">
                                <div className="flex flex-row justify-center">
                                    <img src={image15} />
                                </div>
                                <div className="text-center mt-[36px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Seedlings</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-section-4 flex flex-row justify-center w-full mb-[256px]">
                    <div className="flex flex-col w-[80%]">
                        <h2 className="font-bold mt-[100px] text-xl">Daily Deals</h2>

                        <div className="mt-[20px] flex flex-row justify-between">
                            <div className="flex flex-col w-[268px] bg-white p-[7.5px] rounded-t-xl">
                                <div className="flex flex-row justify-center">
                                    <img src={image16} />
                                </div>
                                <div className="flex flex-col text-left mt-[20px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Basket of Tomatoes</h3>
                                    <span className="text-[#0EB770] text-[18px]"># 10,000</span>
                                    <div className="flex flex-row">
                                        <span className="text-[#6F6F6F] line-through text-[16px] font-[400]"># 20,000</span>
                                        <div className="text-[#CB77D9] font-[400] text-[11px] w-[29px] pl-1 text-center bg-[#CB77D9] bg-opacity-[0.1] ml-[0.6px]">
                                            <span>-50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[268px] bg-white p-[7.5px] rounded-t-xl">
                                <div className="flex flex-row justify-center">
                                    <img src={image16} />
                                </div>
                                <div className="flex flex-col text-left mt-[20px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Basket of Tomatoes</h3>
                                    <span className="text-[#0EB770] text-[18px]"># 10,000</span>
                                    <div className="flex flex-row">
                                        <span className="text-[#6F6F6F] line-through text-[16px] font-[400]"># 20,000</span>
                                        <div className="text-[#CB77D9] font-[400] text-[11px] w-[29px] pl-1 text-center bg-[#CB77D9] bg-opacity-[0.1] ml-[0.6px]">
                                            <span>-50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[268px] bg-white p-[7.5px] rounded-t-xl">
                                <div className="flex flex-row justify-center">
                                    <img src={image16} />
                                </div>
                                <div className="flex flex-col text-left mt-[20px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Basket of Tomatoes</h3>
                                    <span className="text-[#0EB770] text-[18px]"># 10,000</span>
                                    <div className="flex flex-row">
                                        <span className="text-[#6F6F6F] line-through text-[16px] font-[400]"># 20,000</span>
                                        <div className="text-[#CB77D9] font-[400] text-[11px] w-[29px] pl-1 text-center bg-[#CB77D9] bg-opacity-[0.1] ml-[0.6px]">
                                            <span>-50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col w-[268px] bg-white p-[7.5px] rounded-t-xl">
                                <div className="flex flex-row justify-center">
                                    <img src={image16} />
                                </div>
                                <div className="flex flex-col text-left mt-[20px] leading-[27px] font-[700] text-[20px]">
                                    <h3>Basket of Tomatoes</h3>
                                    <span className="text-[#0EB770] text-[18px]"># 10,000</span>
                                    <div className="flex flex-row">
                                        <span className="text-[#6F6F6F] line-through text-[16px] font-[400]"># 20,000</span>
                                        <div className="text-[#CB77D9] font-[400] text-[11px] w-[29px] pl-1 text-center bg-[#CB77D9] bg-opacity-[0.1] ml-[0.6px]">
                                            <span>-50%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}
