import React from 'react'
import { ShopContext } from './shop-context';
import { PRODUCTS } from "./products";
import { useContext } from 'react';
import Cartitem from './cartitem.js';
import './App.css'
const Cart = () => {
  const {cartitems}=useContext(ShopContext);
   let totalamount=0;
  return (
 <>
 <div>
  <h1>Your Cart</h1>

 </div>
 <div>
 {PRODUCTS.map((product)=>{
  if(cartitems[product.id]!==0){
    totalamount+=cartitems[product.id]*product.price;
    return <Cartitem data={product}/>
  }
 })}
 </div>
 <div className='total'>
  <p><b>Total amount</b>=${totalamount}</p>
  <div>
  <button>Check Out</button>
  <button>Continue shopping</button>
  </div>
 </div>
 </>
  )
}

export default Cart
