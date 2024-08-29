import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div className='grid place-items-center'>
        <img src={assets.logo} className='grid place-items-center mb-5 w-24 h-24 rounded-full' alt='' />
      </div>

      <div className='text-[#7c2d12]'>
        <p className='text-xl font-bold mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 font-medium'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
        </ul>
      </div>

      <div className='text-[#7c2d12]'>
        <p className='text-xl font-bold mb-5'>CONTACT</p>
        <ul className='flex flex-col gap-1 font-medium'>
          <li>+1-241-574-7648</li>
          <li>makeup@gmail.com</li>
        </ul>
      </div>  

      <div className='col-span-full w-full'>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ makeup.com - All Right Reserved.</p>
      </div>   
    </div>
  )
}

export default Footer
