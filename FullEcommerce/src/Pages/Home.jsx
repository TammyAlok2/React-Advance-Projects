import React from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="flex-div">
          <div className="text-box">
            <div className="home-title">
             <h1>
             Discover & Shop

              the trend
             </h1>
            </div>
            <div className="land-text">
              Landing pages make traffic more complex because they are focused
              on one goal and or call to action to provide the best content and
              special offer we provide to them .{" "}
            </div>{" "}
            
          </div>

          <div className="image">
            {" "}
            <img
              src="https://img.freepik.com/free-photo/fashionable-young-caucasian-brunette-hoodie-jeans-likes-listen-music-with-headphones-purple-background-technological-device-concept_197531-31649.jpg?w=360&t=st=1704359742~exp=1704360342~hmac=4a57da86019ed7e9322268e0fc4995817bccfd48d742d59ea50f23f6db7d4ced"
              className="home-img"
            />{" "}
          </div>
        </div>
        <button className="shop-now"> Shop Now</button>
      </div>
    </>
  );
};

export default Home;
