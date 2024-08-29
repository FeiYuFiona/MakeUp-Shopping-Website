import {useContext} from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

import React from 'react'

const ProductItem = ({id, name, price, image}) => {
  const {currency} = useContext(ShopContext);

  return (
    <Link className='text-black cursor-pointer' to={`/product/${id}`}>
      <div className="over-hidden">
        <img src={image} alt="" />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;
