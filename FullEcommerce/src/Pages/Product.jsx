import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';
import './Product.css'
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

   <div class="first-container">
      <div class="fiters">
        <h3>Filters</h3>
      </div>
      <div class="sort-recommendation">
        <label for="">Choose option</label>
        <select name="" id="">
          <option value="">Sort by value</option>
          <option value="">High to Low </option>
          <option value="">Low to High</option>
          <option value="">A to Z </option>
          <option value=""> Z to A </option>
        </select>
      </div>
    </div>

    <div class="second-container">
      <div class="box1">
        <div class="category">
          <span class="heading-filter">Category</span>
          <span
            ><input type="checkbox" name="" id="" />

            Boots(2623)
          </span>

          <span
            ><input type="checkbox" name="" id="" />Casual Shoes(23526)</span
          >
          <span
            ><input type="checkbox" name="" id="" />Sports Shoes(15423)</span
          >
          <span><input type="checkbox" name="" id="" />Formal Shoes(9836)</span>
          <span><input type="checkbox" name="" id="" />Flip Flops(8065)</span>
          <span><input type="checkbox" name="" id="" />Sandals(7264)</span>
          <span
            ><input type="checkbox" name="" id="" /> Sports Sandals(1689)</span
          >
        </div>

        <div class="category">
          <span class="heading-filter">Brand</span>
          <span
            ><input type="checkbox" name="" id="" />

            Boots(2623)
          </span>

          <span
            ><input type="checkbox" name="" id="" />Casual Shoes(23526)</span
          >
          <span
            ><input type="checkbox" name="" id="" />Sports Shoes(15423)</span
          >
          <span><input type="checkbox" name="" id="" />Formal Shoes(9836)</span>
          <span><input type="checkbox" name="" id="" />Flip Flops(8065)</span>
          <span><input type="checkbox" name="" id="" />Sandals(7264)</span>
          <span
            ><input type="checkbox" name="" id="" /> Sports Sandals(1689)</span
          >
        </div>

        <div class="category">
          <span class="heading-filter">Saree</span>
          <span
            ><input type="checkbox" name="" id="" />

            Boots(2623)
          </span>

          <span
            ><input type="checkbox" name="" id="" />Casual Shoes(23526)</span
          >
          <span
            ><input type="checkbox" name="" id="" />Sports Shoes(15423)</span
          >
          <span><input type="checkbox" name="" id="" />Formal Shoes(9836)</span>
          <span><input type="checkbox" name="" id="" />Flip Flops(8065)</span>
          <span><input type="checkbox" name="" id="" />Sandals(7264)</span>
          <span
            ><input type="checkbox" name="" id="" /> Sports Sandals(1689)</span
          >
        </div>
      </div>
      <div class="box2">
        
          {
users.map((item,key)=>{
return(
  <>
  <div class="card-page">
  <div class="card">
            <div class="image"><img src={item.image} alt="" /></div>
            <div class="text">{item.title}</div>
            <div class="price">200</div>
            <Link to={`/products/${item.id}`} className='button' > More </Link>
<Toaster/>
          </div>
          </div>
  </>
)

})
          }


         
        </div>

        


      </div>
    











    </>
  )
}

export default Product