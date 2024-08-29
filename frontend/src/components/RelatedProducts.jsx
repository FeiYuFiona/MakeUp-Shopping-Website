import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem';

const RelatedProducts = ({category}) => {
  const {products} = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if(products.length > 0) {
        let copy = products.slice();
        copy = copy.filter((item) => category === item.category);
        setRelated(copy.slice(0,4));
    }
  }, [products, category])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <h2 className='text-[#7c2d12] font-bold my-12'>Related Products</h2>
      </div>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'> 
        {
            related.map((item, index) => {
                return <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image}/>
            })
        }
      </div>
    </div>
  )
}

export default RelatedProducts
