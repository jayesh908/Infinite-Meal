import React, { useContext, useState } from 'react'
import logo from ".././image/isolated-hamburger-with-splash-i-removebg-preview.png"
import ".././index.css"
import { Link } from 'react-router-dom'
import Usercontext from '../Context/Usercontext'
import { useSelector } from 'react-redux'
const Header = ({ setshow }) => {
  const [login, setlogin] = useState("Login")
  const logout = () => {
    login === "Login" ? setlogin("logout") : setlogin("Login")
  }
  const data = useContext(Usercontext)
  console.log(data)

  //Selector

  const cartitem = useSelector((store) => store.cart.item)
  return (
    <div className='flex  justify-between shadow-xl bg-zinc-800'>
      <div className='logo-container'>
        <div><img src={logo} alt='...' className=' w-40 lg:w-20 md:w-30'></img></div>
      </div>
      <div><p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl p-3 italic items-center '>INFINITE MEAL</p></div>
      <div className='p-3'>
        <ul className='lg:flex items-center text-white hidden'>
          <button className=" text-xl p-4 text-white" onClick={() => { setshow((prev) => !prev) }}>Search</button>
          <li className=' text-xl px-4  hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/">Home</Link></li>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in' > <Link to="/about">About us</Link></li>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/contact">Contact Us</Link></li>
          <li className='  text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/cart">Cart-({cartitem.length})</Link></li>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/Grocery">Grocey</Link></li>
          <button onClick={logout} className='text-xl bg-slate-400 p-2 rounded-md hover:bg-slate-500'>{login}</button>
          <li className=' text-xl px-4 hover:text-orange-700 transition duration-150 ease-out hover:ease-in'><Link to="/Grocery">{data.loggedIn}</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
