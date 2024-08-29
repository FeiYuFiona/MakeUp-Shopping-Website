import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Total = () => {
    const {currency, delivery_fee, getTotal} = useContext(ShopContext);

  return (
    <div className='w-full text-[#7c2d12]'>
        <div className='text-2xl'>
          <h2 className='font-bold'>Total Amount</h2>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency}{getTotal()}.00</p>
          </div>

          <hr />
          <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currency}{getTotal() > 0 ? delivery_fee : 0}.00</p>
          </div>

          <hr />
          <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency}{getTotal() === 0? 0: getTotal() + delivery_fee}.00</b>
          </div>
        </div>
      
    </div>
  )
}

export default Total
