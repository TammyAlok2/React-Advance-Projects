import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';
import Navbar from '../Components/Navbar';
const Product = () => {
  const [users,setUsers] = useState([]);

  const HandleUser= async()=>{
    const response =  await fetch ('https://fakestoreapi.com/products');
    setUsers( await response.json());
  }
  useEffect(()=>{
    HandleUser()
  },[]);
   
  const handleClick =()=>{
    toast.success('Fetch Single Product Page');
    
  }
  return (
    <>
   <h1>All Products</h1>
    {
      users.map((item,key)=>{
        return(
          <div className="container">
          <img src={item.image} alt='alok' height={100} / >
<div className="title">{item.title}</div>
<Link to={`/products/${item.id}`} className='button' > More </Link>
<Toaster/>
        </div>
        )
      
       
      })
    }

    </>
  )
}

export default Product