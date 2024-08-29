import React from 'react'

const Contact = () => {
  return (
    <div>
      <form className='text-[#7c2d12] flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4'>
        <h2 className='font-bold text-2xl mb-8'>Contact Us</h2>
        <textarea type='text' placeholder='Write your message' className='w-full border border-[#7c2d12] px-4 py-2 mb-8 text-lg h-48 leading-normal resize-none' required/>
        <input type='email' placeholder='Email' className='w-full border border-[#7c2d12] px-2 py-2 mb-8'  required/>
        <button className='w-full flex justify-between bg-black text-white font-medium py-2 mt-4 px-40'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
