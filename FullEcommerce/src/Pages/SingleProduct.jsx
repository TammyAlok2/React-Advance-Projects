import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import { add ,remove} from '../store/createSlice';
import toast, { Toaster } from 'react-hot-toast';
const SingleProduct = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
const items = useSelector((state)=>state.cart);
  const HandleUser = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    setUsers(await response.json());
  };
  useEffect(() => {
    HandleUser();
  }, []);
  const { productId } = useParams();
  console.log(productId);
  const proId = parseInt(productId);
  const product = users.find((main) => main.id === proId);
  console.log(product);
  const { id,image, description, title } = product ||{};
  //if the destructive error comes so use this || {} for undefined object

  const handleAdd= (product)=>{
    console.log('love you muskan');
    toast.success('Product added successfully');
dispatch(add(product));
    }
    const handleRemove = (product)=>{
      dispatch(remove(product));
      toast.error('removed from cart');
    }


  return (
    <>
      <img src={image} alt="alok" height={300} />
      <h1>{description}</h1>
      <p>{title}</p>
      {
items.some((items)=> items.id === id)?(
  <button onClick={()=> handleRemove(id)}> Remove from Cart</button>
):<p><button onClick={() => handleAdd(product)}>Add to Cart</button></p>
      }
      
      <Toaster />
    </>
  );
};

export default SingleProduct;
