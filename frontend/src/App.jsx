import React, { useContext } from 'react'
import {Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Registration from './pages/registration'
import Home from './pages/home'
import Signup from './pages/login'
import Nav from './component/Nav'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Collections from './pages/Collections'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import NotFound from './pages/NotFound'
import Ai from './component/Ai'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  let {userData}=useContext(userDataContext)
  let location=useLocation()

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000}/>
      {userData && <div className='fixed z-20'><Nav/></div>}
      <Routes>
        <Route path='/signup' element={userData?(<Navigate to={location.state?.from || "/"}/>):(<Signup/>)} />
        <Route path='/registration' element={userData?(<Navigate to={location.state?.from || "/"}/>):(<Registration/>)} />
        <Route path='/' element={userData?<Home/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/about' element={userData?<About/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/collection' element={userData?<Collections/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/product' element={userData?<Product/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/contact' element={userData?<Contact/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/productdetail/:productId' element={userData?<ProductDetail/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/cart' element={userData?<Cart/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/placeorder' element={userData?<PlaceOrder/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='/order' element={userData?<Order/>:<Navigate to="/signup" state={{from:location.pathname}}/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Ai/>
    </>
  )
}

export default App