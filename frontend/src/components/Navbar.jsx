import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const {setShowSearch, getCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-24 h-24 rounded-full' alt='' /></Link>
      <ul className='sm:flex gap-5 text-sm text-[#7c2d12]'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p className='text-xl font-bold'>HOME</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-[#7c2d12]'  hidden/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p className='text-xl font-bold'>COLLECTION</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-[#7c2d12]'  hidden/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p className='text-xl font-bold'>ABOUT</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-[#7c2d12]'  hidden/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p className='text-xl font-bold'>CONTACT</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-[#7c2d12]'  hidden/>
        </NavLink>

      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search} className='w-5 cursor-pointer' alt='' />
       
        <div className='group relative'>
          <Link to='/login'><img src={assets.profile} className='w-5 cursor-pointer' alt='' /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#78716c] text-[#f8fafc] rounded'>
                <p className='cursor-pointer hover:text-[#7c2d12]'>My Account</p>
                <p className='cursor-pointer hover:text-[#7c2d12]'>Orders</p>
                <p className='cursor-pointer hover:text-[#7c2d12]'>Logout</p>
            </div>
          </div>
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart}  className='w-5 min-w-5' alt='' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCount()}</p>
        </Link>


      </div>
    </div>
  )
}

export default Navbar
