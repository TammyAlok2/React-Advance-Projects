import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./CourseCart.css";

const CourseCart = () => {
  const products = useSelector((state) => state.cart);
  console.log(products);

  const [totalAmount, setTotal] = useState(0);

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + parseInt(curr.price, 0), 0));
  }, [products]);
  const dispatch = useDispatch();

  const removeCart = (product) => {
    console.log("item removed");
    toast.error("Course removed from cart");
    dispatch(remove(product));
  };

  if (products.length > 0) {
    return (
      <>
        <div className="column">
          <div className="heading">
            <h2> Cart </h2>
            <h2> Total :{totalAmount}</h2>
          </div>
          <div className="matter">
            {products.map((item) => {
              return (
                <>
                  <div className="main-cart">
                    <div className="cart-container">
                      <img src={item.image} alt="alok" className="cart-image" />
                      <h2 className="id">{item.id}</h2>
                      <h4 className="price">{item.price}</h4>
                      <button
                        onClick={() => {
                          removeCart(item.id);
                        }}
                      >
                        {" "}
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h2>No Course found </h2>
      <Link to={"/"}> Home</Link>
    </>
  );
};

export default CourseCart;
