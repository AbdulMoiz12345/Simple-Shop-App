import { useContext } from 'react';
import React from 'react';
import './App.css';
import { ShopContext } from './shop-context';
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {addtocart,cartitems}=useContext(ShopContext);
  const cartItemamount=cartitems[id];
  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div>
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button onClick={()=>addtocart(id)}>Add to cart {cartItemamount>0&&<>({cartItemamount})</>}</button>
    </div>
  );
}

export default Product;

