import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    const route = () =>{
        navigate("/dashboard")
    }
    return (
        <div className="w-[565px] bg-white login-form rounded-[10px] mt-[100px]">
            <h2 className="text-[69px] text-black font-[800] text-center">Hello</h2>
            <div className="text-center">
                <span className="db font-[400px] text-[18px] text-[#6D7D8B]">
                    Sign in to Agro-link or <Link to={"/auth/register"}>create an account</Link>
                </span>
            </div>
            <div className="mt-1">
                <div className="text-input ml-[31px] w-[495px]">
                    <input type="email" placeholder="Email" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[40px]">
                    <input type="password" placeholder="Password" className="w-full rounded-[28px] p-2" />
                </div>
                <div className="text-input ml-[31px] w-[495px] mt-[40px] mb-[53px]">
                    <button onClick={route} className="w-full rounded-[28px] p-2 bg-[#0EB770] text-white">Done</button>
                </div>
                <div className="text-[#6D7D8B] text-center mb-[83px]">
                    <span>
                        Stay signed in
                        Using a public or shared device?
                        Uncheck to protect your account.
                        Learn more
                    </span>
                </div>
            </div>
        </div>
    )
}
