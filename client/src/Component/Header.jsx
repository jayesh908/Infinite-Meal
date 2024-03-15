import React, { useState } from 'react'
import logo from ".././image/isolated-hamburger-with-splash-i-removebg-preview.png"
import ".././index.css"
import { Link } from 'react-router-dom'
const Header = () => {
  const [login, setlogin] = useState("Login")
  const logout = () => {
    login === "Login" ? setlogin("logout") : setlogin("Login")

  }
  return (
    <div className='flex  justify-between shadow-xl bg-zinc-800'>
      <div className='logo-container'>
        <div><img src={logo} alt='...' className=' w-40 lg:w-20 md:w-30'></img></div>
      </div>
      <div><p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl p-3 italic items-center '>INFINITE MEAL</p></div>
      <div className='p-3'>
        <ul className='lg:flex items-center text-white hidden'>
          <li className=' text-xl px-4  hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/">Home</Link></li>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in' > <Link to="/about">About us</Link></li>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/contact">Contact Us</Link></li>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link>Cart</Link></li>
          <button onClick={logout} className='text-xl bg-slate-400 p-2 rounded-md hover:bg-slate-500'>{login}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header
