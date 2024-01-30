

import React from 'react'
import {  useSelector } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const items = useSelector((state)=>state.cart);
  return (
<>
<div className='navbar'>
  <div className='logo'> 
  Fashion Store 
  </div>
  <nav className='middle'>
      <ul className="nav-items">
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
        <li>
          <Link to="men">Men</Link>
        </li>
        <li>
          <Link to="About">Women</Link>
        </li>
        <li>
          <Link to="Product">Product</Link>
        </li>
        <li>
        <Link to="cart"> Cart </Link>
    <div><b>{items.length}</b>
    </div>
        </li>
      </ul>
    </nav>

    <div className='button'>
<button className='signup'> Signup </button>
<button className='login'> Login </button>
    </div>

</div>
  
     
  </>  

   
    
  
    
  )
}

export default Navbar