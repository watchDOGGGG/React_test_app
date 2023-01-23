import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="w-[565px] bg-white login-form rounded-[10px] mt-[100px]">
            <h2 className="text-[69px] text-black font-[800] text-center">Create An Account</h2>
            <div className="mt-1">
                <div className="text-input ml-[31px] w-[495px] mt-[20px]">
                    <input type="text" placeholder="Firstname" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[20px]">
                    <input type="text" placeholder="Lastname" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[20px]">
                    <input type="email" placeholder="Email" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[20px]">
                    <input type="tel" placeholder="Phone number" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[20px]">
                    <input type="password" placeholder="Password" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[20px] mb-[53px]">
                    <button type="submit" className="w-full rounded-[28px] p-2 bg-[#0EB770] text-white">Done</button>
                </div>
                <div className="text-[#6D7D8B] text-center mb-[83px]">
                    <span>
                        By signing up you accept our terms and conditions
                        & privacy policy
                    </span>
                </div>
            </div>

            <div className="text-[#6D7D8B] text-center">
                <span>
                    Already have an Account?
                </span>
            </div>
            <div className="text-input ml-[31px] mt-[20px] mb-[53px] text-center">
                <Link to={"/auth/login"} className="w-[495px] rounded-[28px] p-2 text-black link flex text-center">Login</Link>
            </div>
        </div>
    )
}
