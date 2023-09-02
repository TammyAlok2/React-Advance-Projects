import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/createSlice";
import { Toaster, toast } from "react-hot-toast";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotal] = useState(0);

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + curr.price, 0));
  }, [products]);

  const handleRemove = (productId) => {
    toast.error("Deleted Items successfully");
    dispatch(remove(productId));
  };

  if (products.length > 0) {
    return (
      <div>
        <h3>Cart</h3>
        <div className="wrapper">
          {products.map((main) => {
            return (
              <div>
                <div className="contanier">
                  <img src={main.image} alt="" height={100} />
                  <div className="title">{main.title}</div>
                  <div className="price">{main.price}</div>

                  <button
                    className="remove"
                    onClick={() => handleRemove(main.id)}
                  >
                    remove
                  </button>

                  <Toaster />
                </div>
              </div>
            );
          })}
        </div>
        <h2> Total : {totalAmount}</h2>
      </div>
    );
  }
  return (
    <>
      <h2>Cart is Empty </h2>
      <Link to="/Product">Buy Now</Link>
    </>
  );
};

export default Cart;
