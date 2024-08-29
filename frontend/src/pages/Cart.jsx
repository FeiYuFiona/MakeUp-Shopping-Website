import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Total from '../components/Total';

const Cart = () => {
  const {products, currency, cartItems, updateQuantity, navigate} = useContext(ShopContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const temp = [];

    for(const item in cartItems){
      if(cartItems[item] > 0)
          temp.push({
            id: parseInt(item),
            quantity: cartItems[item]
      })
    }
    setCart(temp);
  }, [cartItems])

  return (
    <div className='border-t pt-14 text-[#7c2d12]'>
      <h2 className='font-bold text-2xl mb-3'>Your Cart</h2>
      
      <div className=''>
        {
          cart.map((item, index) => {
            const productData = products.find((product) => product.id === item.id);

            return (
              <div key={index} className='py-4 border-b text-[#7c2d12] grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt='' />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>Price: {currency}{productData.price}</p>
                    </div>

                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type='number' min={1} defaultValue={item.quantity}></input>
                <img onClick={() => updateQuantity(item.id, item, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin} alt=''/>
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <Total />
          <div className='w-full text-end'></div>
          <button onClick={() => navigate('/place-order')} className='bg-[#7c2d12] text-white font-bold px-8 my-8 py-3 text-sm'>Confirm the order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
