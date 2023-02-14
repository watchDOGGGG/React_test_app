import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import image16 from '../assets/16.png'
import image23 from '../assets/23.png'
import image22 from '../assets/22.png'

export default function ProductOverview() {
  return (
    <div className="w-full">
      <div className="cate-section-1 w-full">
        <div className="flex flex-row justify-center">
          <Header />
        </div>
      </div>
      <div className='bg-[#F5F5F5]'>
        <div className="home-section-4 flex flex-row justify-center ">
          <div className="w-[90%] flex flex-row">
            <div className="w-[70%]">
              <div>
                <img src={image22} className="h-[677px] w-[763px]" />
              </div>
              <div className="font-[800] text-[69px]">
                <span>
                  Basket of Eggs
                </span>
              </div>
              <div className="flex flex-row">
                <span>Promoted</span>
                <span className="ml-5">Posted 3 hours</span>
                <span className="ml-5">Lagos, Ikeja</span>
              </div>

              <div className="flex flex-row mt-[109px]">
                <div className="flex flex-col font-bold text-sm">
                  <span>EGG</span>
                  <span>TYPE</span>
                </div>

                <div className="flex flex-col font-bold text-sm ml-[159px]">
                  <span>15</span>
                  <span>QUANTITY</span>
                </div>
              </div>

              <div className='mt-[42px]'>
                <span>
                  Giant broiler Eggs , Heavy and affordable
                  1 chicken 7500
                </span>
              </div>

              <div className='mt-[45px] flex flex-col'>
                <div className='bg-[#3E7857] w-[268px] h-[69.98px] leading-[29.37px] text-white text-center rounded-[30px]'>
                  <div className="flex flex-col justify-center">
                    <span className='font-[800] text-[18px] pt-[20px]'>+234 567 890</span>
                  </div>
                </div>
              </div>

              <div className='mt-[20.2px] flex flex-col'>
                <div className='border-2 border-black w-[268px] h-[69.98px] leading-[29.37px] text-black text-center rounded-[30px]'>
                  <div className="flex flex-col justify-center">
                    <span className='font-[800] text-[18px] pt-[20px]'>Make an Offer</span>
                  </div>
                </div>
              </div>

            </div>

            {/* right */}
            <div className="w-[367px]">
              <div className="bg-white w-full p-[24px]">
                <div>
                  <span className="font-[800] text-[30px]">₦ 160,000</span>
                  <div className='mt-[20.2px] flex flex-col'>
                    <div className='border-2 border-black  leading-[29.37px] text-black text-center rounded-[30px] p-2'>
                      <span className='font-[800] text-[18px]'>Market price: ₦ 159.5 K ~ 170 K</span>
                    </div>
                  </div>

                  <div className='mt-[20.2px] flex flex-col'>
                    <div className='bg-[#0EB770]  leading-[29.37px] text-white text-center rounded-[30px] p-2'>
                      <span className='font-[800] text-[18px]'>Request Call Back</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white w-full p-[24px] mt-[20px]">
                <div>
                 <div className="flex flex-row">
                  <div className='mr-[13.62px]'>
                    <img src={image23}/>
                  </div>
                 <div className="flex flex-col">
                    <span className="font-[600] text-[16px]">Isreal Poultry</span>
                    <span className="font-[600] text-[16px]">Typically replies within a day</span>
                    <span className="font-[600] text-[16px]">1y 6m on Jiji</span>
                  </div>
                 </div>
                  <div className='mt-[20.2px] flex flex-col'>
                    <div className='bg-[#0EB770]  leading-[29.37px] text-white text-center rounded-[30px] p-2'>
                      <span className='font-[800] text-[18px]'>+234 567 890</span>
                    </div>
                  </div>

                  <div className='mt-[20.2px] flex flex-col'>
                    <div className='border-[#0EB770] border-2  leading-[29.37px] text-[#0EB770] text-center rounded-[30px] p-2'>
                      <span className='font-[800] text-[18px]'>Start Chat</span>
                    </div>
                  </div>
                </div>
              </div>


              
              <div className="bg-white w-full p-[24px] mt-[20px]">
                <div>
                 <div className="flex flex-row justify-center p-3">
                  <div>
                    <h2 className="font-[700] text-[20px] text-center">SAFETY TIPS</h2>
                    {
                      SafetyList.map((item,i) => (
                        <li className='text-justify font-[600] text-[16px]'>{item}</li>
                      ))
                    }
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-4 flex flex-row justify-center w-full mb-[66px] mt-[98px]">
                    <div className="flex flex-col w-[90%]">
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


const SafetyList = [
  "Don't pay in advance, including for delivery",
  "Meet the seller at a safe public place",
  "Inspect the item and ensure it's exactly what you want",
  "On delivery, check that the item delivered is what was inspected",
  "Only pay when you're satisfied"
]