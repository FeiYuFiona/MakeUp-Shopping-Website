import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');

  const fetchProductData = async() => {
    products.map((item) => {
      if(item.id == productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  if(!productData) return null;
  
  return (
    <div className='border-t-2 pt-10 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <img src={image} alt='' className='w-full h-auto' />
        </div>
        
        {/* Additional Product Information */}
        <div className='flex-1 mt-2'>
          <h1 className='text-2xl font-bold mt-2'>{productData.name}</h1>
          <p className='text-lg mt-2'>{productData.description}</p>
          <p className='text-xl font-semibold mt-2'>Price: ${productData.price}</p>
          <button onClick={() => addToCart(productData.id)} className='bg-[#7c2d12] text-white px-8 py-3 text-sm mt-8'>ADD TO CART</button>
        </div>
  
      </div> 
      <RelatedProducts category={productData.category}/>
    </div>
  )
};

export default Product
