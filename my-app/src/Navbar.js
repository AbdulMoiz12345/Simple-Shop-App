import React from 'react'
import './App.css'
import {ShoppingCart} from "phosphor-react";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <nav className='nav'>
    <div className='link'>
        <Link to='/' className='li'>Shop</Link>
        <Link to='/cart' className='li'><ShoppingCart size={32}/></Link>
    </div>
    </nav>
    </>
  )
}
