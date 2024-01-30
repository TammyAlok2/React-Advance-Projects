import React, { useEffect,useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
const Product = () => {
  const [users,setUsers] = useState([]);
  const [items,fitlerItems] = useState([]);

  const HandleUser= async()=>{
    const response =  await fetch ('https://fakestoreapi.com/products');
    setUsers( await response.json());
  }


  const filteredItems =(category)=>{
   let newUser = users.filter((items)=>{items.category === category});
return newUser;
setUsers(newUser);
  }
  useEffect(()=>{
    HandleUser()
  },[]);



  return (
    <div>

      <div className='' >
      <Carousel autoPlay infiniteLoop  showIndicators={true}  thumbnails={false} showStatus={false} 
            thumbnailWidth="0px"
      >
                <div className='w-100'>
                    <img width={100} height={10}  className='h-96' src="https://m.media-amazon.com/images/I/61WSHXI4MjL._SX1500_.jpg" />
                
                </div>
                <div>
                    <img  className='h-72' src="https://m.media-amazon.com/images/I/61gmkdtcyPL._SX1500_.jpg"  />
                 
                </div>
                <div>
                    <img src="https://images.meesho.com/images/marketing/1701835320853_400.webp" className='h-72' />
                 
                </div>
            </Carousel>
         </div>
         <div className="flex justify-end ">
        <select name="" id="" className='border-black'>
          <option value="">Sort By </option>
          <option > Low to High</option>
          <option selected>High to Low</option>
          <option >A to Z </option>
          <option >Z to A</option>

        </select>
      </div>
    <div className="container flex ">
   
        <div className="bg-slate-200 h-full m-10">
          <h1 className='text-center m-10 text-2xl'>Categories</h1>
<ul className='flex-column  w-full  gap-10 m-10 p-10 ' >
<li> <button className='border rounded-full bg-white m-5  p-3 hover:shadow-2xl'> All Products</button></li>
<li><button className='border rounded-full bg-white m-5 p-3 hover:shadow-2xl' onClick={()=>{filteredItems('Electronics')}}>Electronic</button></li>
<li><button className='border rounded-full bg-white m-5 p-3 hover:shadow-2xl ' onClick={()=>{filteredItems('jewelery')}}>jewelery</button></li>
<li><button className='border rounded-full bg-white m-5 p-3 hover:shadow-2xl'>Men' Clothing</button></li>
<li><button className='border rounded-full bg-white m-5 p-3 hover:shadow-2xl'>Women's Clothing</button></li>
</ul>



        </div>
        <div className="flex flex-wrap flex-1 m-3 gap-5 p-5 h-full">
{
  users.map((item)=>{
  return(
    <>
    <div className=" border w-40 ">
    
       <div className= " flex-column hover:shadow-2xl h-auto"> 
        <img src={item.image} alt="" className='h-auto w-full max-h-42' />
      <div className='text-l text-sky-950  w-full font-bold' >{item.title.slice(0,20)}</div>
      <div className='font-bold text-sky-950 m-5' > RS : {item.price}</div>
      <button class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full m-5">
  <Link to={`/products/${item.id}`}> More </Link>
</button>
  
      </div>
      </div>
   
    </>
  )
  })
}
        </div>
    </div>
    </div>
  )
}

export default Product
