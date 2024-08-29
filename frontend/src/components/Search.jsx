import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const loc = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(loc.pathname.includes('collection'))
            setVisible(true);
        else
            setVisible(false);
    }, [loc])

    return showSearch && visible? (
    <div className='border-t border-b bg-[#f8fafc] text-center'>
      <div className='inline-flex items-center justify-center border border-[#f8fafc] px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input className='flex-1 text-lg px-4 py-2 w-full mr-8 border-[#7c2d12] rounded-lg' alue={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search' />
        <img className='w-4' src={assets.search} alt='' />
      </div>
    </div>
  ) : null
}

export default Search
