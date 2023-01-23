import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'

export default function Auth() {
  return (
    <div className="flex flex-row justify-center w-full">
        <Routes>
            <Route path="" element={<Login/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Routes>
    </div>
  )
}
