import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
 
  const onSubmit = async(e) => {
    e.preventDefault();
  }
 
  return (
    <div>
      <form onSubmit={onSubmit} className='text-[#7c2d12] flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4'>
        <div>
          <p className='font-bold text-2xl mb-8 px-32'>{currentState}</p>
          {currentState === 'Login' ? '' : <input type='text' placeholder='Username' className='w-full border border-[#7c2d12] px-2 py-2 mb-8' required/>}
          <input type='email' placeholder='Email' className='w-full border border-[#7c2d12] px-2 py-2 mb-8'  required/>
          <input type='password' placeholder='Password' className='w-full border border-[#7c2d12] px-2 py-2 mb-8'  required/>

          <button className='w-full flex justify-between bg-black text-white font-medium py-2 mt-4 px-40'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </form>
      
    </div>
  )
}

export default Login
