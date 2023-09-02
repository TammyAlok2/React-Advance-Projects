

import React from 'react'
import {  useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
const Navbar = () => {
    const items = useSelector((state)=>state.cart);
  return (
<>
  <nav>
      <ul className="nav-items">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="Product">Product</Link>
        </li>
        <li>
        <Link to="cart"> Cart </Link>
    <div> cartItems<b>{items.length}</b>

    </div>
        </li>
      </ul>
    </nav>
     
  </>  

   
    
  
    
  )
}

export default Navbar