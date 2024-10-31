import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="flex items-end justify-between bg-white sticky top-0 z-50 bg-fixed" >
        <div className='text-6xl text-blue-400'>LOGO </div>

        <ul className='flex m-5 p-3 gap-10 text-xl cursor-pointer'>
            <li className='hover:text-red-600 '>   <Link to = 'Home'> Home</Link> </li>
            <li className='hover:text-red-600'> <Link to = 'Product'> About</Link>  </li>
            <li className='hover:text-red-600'> <Link to = 'Product'> Men</Link> </li>
            <li className='hover:text-red-600'> <Link to = 'Home'> Home</Link> </li>
            <li className='hover:text-red-600'> <Link to = 'Home'> Home</Link> </li>
            <li className='hover:text-red-600'><Link to = 'Cart'> Cart</Link> </li>
        </ul>

        <div className="flex m-5 p-3 gap-5"> 
        
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Sign up </button> 
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Login </button> 
        </div>
      </div> 
    </div>
  )
}

export default Navbar
