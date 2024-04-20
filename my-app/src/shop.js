import React, { useContext } from 'react'
import { PRODUCTS } from "./products";
import Product from './Product';
import './App.css'
import { ShopContext } from './shop-context';
const Shop = () => {
  const {addtocart}=useContext(ShopContext);
  return (
    <>
    <div className='title'> Shop App</div>
    <div className='main'>
      {PRODUCTS.map((product)=><Product data={product}/>)}
    </div>
    </>
  )
}

export default Shop
