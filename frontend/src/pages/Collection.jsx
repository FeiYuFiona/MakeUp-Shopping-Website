import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem';

const Collection = () => {
 
    const { products, search, showSearch } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);


    const toggleCategory = (event) => {
          if(category.includes(event.target.value)){
            return setCategory(prev => prev.filter(item => item !== event.target.value))
          }
          else{
            return setCategory(prev => [...prev, event.target.value])
          }
        }

    const applyFilter = () => {
          let copy = products.slice();

          if(showSearch && search){
            copy = copy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
          }

          if(category.length > 0)
            copy = copy.filter(item => category.includes(item.category));

          setFilterProducts(copy);
    }


    useEffect(() => {
      setFilterProducts(products);
    }, [])

    useEffect(() => {
      applyFilter();
    }, [category, search, showSearch])

    

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/*Filter*/}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center gap-2 text-[#7c2d12] font-bold'>Filter</p>
        <div className={`border border-[#7c2d12] pl-5 py-3 mt-6 sm:block`}>
          <p className='mb-3 text-sm font-medium text-[#7c2d12]'>Categories</p>
          <div className='flex flex-col gap-2 text-sm text-[#7c2d12]'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'lipstick'} onChange={toggleCategory} />Lipstick
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'foundation'} onChange={toggleCategory} />Foundation
            </p>

            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'eye shadow'} onChange={toggleCategory} />Eye Shadow
            </p>
          </div>
        </div>
      </div> 

      {/*Content*/}
      <div className='flex-1'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item, index) => {
            return (<ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />);
          })
        }
        </div>
      </div>

      
    </div>
  )
}

export default Collection
