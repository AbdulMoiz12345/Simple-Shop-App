import React,{createContext,useState} from 'react'
import {PRODUCTS} from './products'
export const ShopContext=createContext(null)
const getdefaultcart= ()=>{
  let cart={};
  for(let i=1;i<PRODUCTS.length+1;i++){
    cart[i]=0;
  }
  return cart;
}
const ShopContextProvider = (props) => {
    const [cartitems,setcartitems]=useState(getdefaultcart())
    const addtocart=(itemid)=>{
         setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
    const removetocart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
   }
   const context={cartitems,addtocart,removetocart}
   console.log(cartitems);
  return (
   <ShopContext.Provider value={context}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
