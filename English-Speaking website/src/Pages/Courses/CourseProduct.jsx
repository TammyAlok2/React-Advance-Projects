import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CourseProduct.css";
import { add, remove } from "../../redux/slice/CartSlice";
import { Toaster, toast } from "react-hot-toast";
const CourseProduct = ({ item }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const handleAdd = (product) => {
    console.log("love you muskan");
    toast.success("Course added successfully");
    dispatch(add(product));
  };
  const handleRemove = (product) => {
    dispatch(remove(product));
    toast.error("removed from cart");
  };

  return (
    <>
      <div className="container">
        <div className="box">
          <img src={item.image} alt="alok" height={200} />
          <h3 className="id"> {item.id}</h3>
          <p className="description"> {item.description} </p>
          <p className="price">Rs: {item.price}</p>
          {product.find((main) => main.id === item.id) ? (
            <button className="remove" onClick={() => handleRemove(item.id)}>
              Remove from Cart
            </button>
          ) : (
            <p>
              <button className="add" onClick={() => handleAdd(item)}>
                Add to Cart
              </button>
            </p>
          )}

          <Toaster />
        </div>
      </div>
    </>
  );
};

export default CourseProduct;
