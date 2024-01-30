import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../store/createSlice';

const CartPage = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [totalAmount, setTotal] = useState(0);

    useEffect(() => {
        setTotal(products.reduce((acc, curr) => acc + curr.price, 0));
    }, [products]);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    if (products.length > 0) {
        return (
            <div>
                <div className="container flex">

                    <div className="flex-column gap-20 m-2 p-2 w-3/4">

                        {
                            products.map((items, id) => {
                                return (
                                    <>
                                        <div className="flex gap-10 border ">
                                            <img src={items.image} alt="" className=' h-48 w-48' />
                                            <div className="flex-column">
                                                <div className="font-bold  text-xl w-72">{items.title}</div>
                                                <button className='my-10 rounded-full bg-pink-700 text-white p-3 hover:shadow-2xl' onClick={(() => { handleRemove(items.id) })}>Remove from cart </button>
                                            </div>

                                            <div className="font-bold"> Rs  {items.price} </div>
                                        </div>

                                    </>
                                )
                            })
                        }



                    </div>

                    <div className="flex-column border h-80 w-4/12 right-0">
                        <div className="text-xl font-bold text-center mx-5">   Order Details </div>
                        <hr />
                        <div className="my-5 text-xl font-semibold flex justify-between">  <span>Product Cost    :   </span>   <span className='text-pink-500'> Rs  : {parseInt(totalAmount)} </span> </div>
                        <div className="my-5 text-xl font-semibold flex justify-between">  <span>Shipping Charges    :   </span>   <span className='text-green-600'>Free </span> </div>
                        <hr />
                        <div className="my-5 text-xl font-bold flex justify-between">  <span>Total   :   </span>   <span className=' '> Rs : {parseInt(totalAmount)}  </span> </div>

                        <button className='w-full bg-blue-800 text-white my-8 p-3 rounded-full hover:bg-red-900'> Place Order </button>




                        <div className="flex justify-between my-8 p-1">
                            <div className="flex-column gap-2"> <img src="https://store.pw.live/assets/trust-us/security.svg" alt="" className='mx-10' /> <div className='text-xs font-semibold w-36 align-center text-center  '>100% Safe & secure payments</div></div>
                            <div className="flex-column"> <img src="https://store.pw.live/assets/trust-us/order.svg" alt="" className='mx-10' /> <div className='text-xs font-semibold w-36 align-center text-center'>Easy return and replacements </div></div>
                            <div className="flex-column"> <img src="https://store.pw.live/assets/trust-us/delivery.svg" alt="" className='mx-10' /> <div className='text-xs font-semibold w-36 align-center text-center'>Trusted Shipping</div></div>


                        </div>
                    </div>


                </div>
            </div>



        )

    }
    else {
        return (
            <>
                <h2> No items found Buy now </h2></>
        )
    }
}

export default CartPage
