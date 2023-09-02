import React from 'react'
import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Error from './Pages/Error'
import ShareLayout from './Components/ShareLayout'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Components/Cart'
import './Style.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      hello this is me alok

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet/>
    </div>
  );
}

function App(){
  return (

    <>
    
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element = {<Dashboard/>}/>
<Route index element={<Home/>}/>
<Route path='About' element ={<About/>}/>
<Route path='Product' element={<Product/>}/>
<Route path='*' element={<Error/>}/>
<Route path = 'products/:productId' element={<SingleProduct/>}/>
<Route path='cart' element={<Cart/>}/>


</Routes>


</BrowserRouter>
<Footer/>
</>

  )
}

export default App