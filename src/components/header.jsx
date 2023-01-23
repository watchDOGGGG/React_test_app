import React from 'react'
import image8 from '../assets/8.png'
import image9 from '../assets/9.png'
import image10 from '../assets/10.png'
import image6 from '../assets/6.png'

export default function Header() {
    return (
        <div className="bg-white w-[1300px] h-[100px] mt-[40px] rounded-[20px]">
           <div className="flex flex-col justify-center h-full">
           <div className="flex flex-row justify-around w-full">
                <div className="w-[10%]">
                <img src={image6} className=" w-[85px] h-[35px]"/>
                </div>
                <div className="flex flex-row justify-around w-[50%]">
                    <div className='w-full border border-black rounded-[28px] flex flex-row justify-center header-search'>
                        <input className="w-[90%]" type="text" placeholder='search...'/>
                    </div>
                </div>
                <div className="w-[25%] flex flex-row justify-center">
                    <img src={image10} className="w-[35px] h-[35px]"/>
                    <img src={image9} className="ml-5 w-[35px] h-[35px]" />
                    <img src={image8} className="ml-5 w-[35px] h-[35px]" />
                </div>
            </div>
           </div>
        </div>
    )
}
