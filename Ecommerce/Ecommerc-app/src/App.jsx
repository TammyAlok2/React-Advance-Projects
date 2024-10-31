import React from 'react'
import Navbar from './Components/Navbar'
import Product from './Pages/Product'
import SingleProduct from './Pages/SingleProduct'
import CartPage from './Pages/CartPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Routes>
        <Route path ="/" elemenent ={<Product />}/>
        <Route index element={<Product/>}/>
<Route path='About' element ={<Product/>}/>
<Route path='Product' element={<Product/>}/>
<Route path='*' element={<Error/>}/>
<Route path = 'products/:productId' element={<SingleProduct/>}/>
<Route path='cart' element={<CartPage/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
