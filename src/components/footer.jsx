import React from 'react'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'

export default function Footer() {
  return (
    <div className="bg-black p-[60px] text-white w-full text-sm">
      <div className="flex flex-row justify-around w-full border-t border-white p-5">
        <div className="w-[20%]">
          <h2>Logo</h2>
        </div>
        <div className="flex flex-row justify-around w-[60%]">
          <span>Home</span>
          <span>About</span>
          <span>Pricing</span>
          <span>Features</span>
          <span>Contact</span>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className="w-[20%] flex flex-row justify-center">
          <img src={image4} />
          <img src={image5} className="ml-5"/>
        </div>
      </div>
      <div className="text-center text-sm mt-[31px]">
        <span>© 2022 Bonnie Hong. All Rights Reserved.</span>
      </div>
    </div>
  )
}
