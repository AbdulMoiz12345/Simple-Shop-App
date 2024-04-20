import React from 'react'
import { ShopContext } from './shop-context';
import { useContext } from 'react';
import './App.css'
const Cartitem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {cartitems,addtocart,removetocart}=useContext(ShopContext);
  return (
   <>
   <div className='cart'>
      <img src={productImage} alt={productName} />
      <div>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className='btn'>
          <button onClick={()=>addtocart(id)}>+</button>
          <input placeholder={cartitems[id]}/>
          <button onClick={()=>removetocart(id)}>-</button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Cartitem
