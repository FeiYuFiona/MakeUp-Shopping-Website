import React from 'react'
import Total from '../components/Total'

const PlaceOrder = () => {
  return (
    <div className='text-[#7c2d12] flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <h2>Delivery Information</h2>
        </div>

        <div className='flex gap-3'>
          <input type='text' placeholder='First Name' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
          <input type='text' placeholder='Last Name' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
        </div>
          
        <input type='email' placeholder='Email Address' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
        <input type='text' placeholder='Street' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>

        <div className='flex gap-3'>
          <input type='text' placeholder='City' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
          <input type='text' placeholder='State' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
        </div>

        <div className='flex gap-3'>
          <input type='text' placeholder='Zip Code' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
          <input type='text' placeholder='Country' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
        </div>

        <input type='number' placeholder='Phone' className='border border-[#7c2d12] rounded py-1.5 px-3.5 w-full'></input>
      </div>


      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <Total />
        </div>

         
      </div>
    </div>
  )
}

export default PlaceOrder
