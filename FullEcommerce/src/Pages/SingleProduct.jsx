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

    toast.success('Product added successfully');
dispatch(add(product));
    }
    const handleRemove = (product)=>{
      dispatch(remove(product));
      toast.error('removed from cart');
    }


  return (
    <>






<div className="container">
<div className="box1">
<div className="photo-column">
<img src="ui.png" alt=""/>
<img src="ui.png" alt=""/>
<img src="ui.png" alt=""/>
<img src="ui.png" alt=""/>



</div>

</div>
<div className="box2">

    <div className="product-name">
        <h2>Sleeper </h2>
        <span className="description">Makes the comfort while wearing</span>
        <div className="star">4</div>
      <hr/>
    </div>
    <div className="price">
        <div className="pricing1"> Rs .10000 <div className="pricing2"> Inclusive of all the taxes </div> </div>   
        
    </div>
    <div className="sizing-list">
        
        <h2>Select Size</h2>
        <div className="size">
        <div className="sizing"> 6 </div>
        <div className="sizing"> 7 </div>
        <div className="sizing"> 9 </div>
        <div className="sizing"> 9  </div>
        <div className="sizing"> 10 </div>
        <div className="sizing"> 11 </div>
    </div>
    </div>
    <div className="button-column">
        <button className="button button1">Added to Cart </button>
        <button className="button button2">Add to Wishlist</button>
    </div>

</div>
</div>


    

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
