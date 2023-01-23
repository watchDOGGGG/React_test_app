import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

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
                        <h2 className="font-bold mt-[100px] text-xl">Explore Top Dealer’s</h2>
                    </div>
                </div>
                <div className="home-section-2 flex flex-row justify-center w-full">
                    <div className="flex flex-col w-[80%]">
                        <h2 className="font-bold mt-[100px] text-xl">Explore Top Products</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
