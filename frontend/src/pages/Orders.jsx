import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
  const {products, currency, cartItems} = useContext(ShopContext);

  return (
    <div className='border-t pt-16 text-[#7c2d12]'>
      <div className='text-2xl'>
        <h2>My Orders</h2>
      </div>

      <div>
        {
          products.slice(1,4).map((item, index) => {
            const quantity = cartItems[item.id];

            <div key={index} className='py-4 border-t border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} alt='' className='w-16 sm:w-20' />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2text-base'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p className='text-lg'>Quantity: {quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
      
    </div>
  )
}

export default Orders
