import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import { add,remove } from '../store/createSlice';
import {useDispatch,useSelector} from 'react-redux'

const SingleProduct = () => {
const[users,setUsers] = useState([]);
const HandleUser = async()=>{
const response = await fetch("https://fakestoreapi.com/products");
setUsers(await response.json());

};
useEffect(()=>{
    HandleUser();
},[]);

const dispatch = useDispatch();
const items= useSelector((state)=>state.cart);


// findi ng the product
const {productId} = useParams();
console.log(productId);
const proId= parseInt(productId);
const  product = users.find((main)=> main.id === proId);
console.log(product);
const { id,image, description, title,price ,rating} = product ||{};
   
// cart page 
const handleAdd = (product)=>{
    dispatch(add(product));
}
const handleRemove = (product)=>{
    dispatch(remove(product));
}
return (
        <div>
            <div className="container flex">

                <div className="container1">
                    <img src={image} alt=""  className='m-10 px-5' />
                    <div className="flex gap-10 m-10 px-10" >
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Go to Bag
                        </button>
                        <button class="bg-white hover:bg-blue-700 text-blue-700 font-bold py-2 px-4 rounded-full">
                            Buy now
                        </button>
                    </div>
                </div>

                <div className="flex-column m-10 px-5 ">
                    <div className="">
                        <h2 className='w-full font-bold text-xl'>{description}</h2>
                   <h3 className='py-8 text-slate-700 text-xl'> {title}</h3>
                   <button className="bg-green-800 text-white p-2 m-2" > 🌟 4.8  </button> 11 ratings and others

                   <div className="text-2xl font-bold m-1 py-5"> Rs {price}   <span className='text-green-300'>   90 %off</span></div>

                   <div className=" text-slate-500 font-bold"> Quantity : <select name="" id="" className='m-5'>
                    <option value="">1 </option>
                    <option value="">2</option>
                    <option value="">3 </option>
                    <option value="">4 </option>
                    </select></div>
                    </div>
                    <div className="flex gap-10 m-2 p-2" >
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-14 p-6  rounded-full">
                            Go to Bag
                        </button>

                        {
                            items.some((items)=>items.id === id) ? (
                                <button onClick={()=> handleRemove(id)} className="bg-red-500 hover:bg-orange-200 text-blue-700 font-bold m-14 p-6 rounded-full"> Remove from cart </button>
                            ): <p> <button onClick={()=> handleAdd(product)} className="bg-red-500 hover:bg-orange-700 text-blue-700 font-bold m-14 p-6 rounded-full"> Add to cart </button></p>
                        }
                        
                    </div>
                    <hr/>
        

                </div>

            </div>
        </div>
    )
}

export default SingleProduct
