import React from 'react'

const Subscribe = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center'>
      <p className='text-2xl font-bold text-[#7c2d12]'>Get 10% off for new subscribers</p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required></input>
        <button className='bg-[#7c2d12] text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Subscribe
