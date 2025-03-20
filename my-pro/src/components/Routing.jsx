import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../App'
import Home from './Home'
import About from './about'
import Products from './Products'
import ContactUs from './ContactUs'
import Register from './Register'
import Login from './Login'
import Header from './Header'
import PageNotFound from './PageNotFound'
import Cart from './Cart'
import ProductDetails from './ProductDetails'
import AdminLayout from './Admin/AdminLayout'
import Dashboard from './Admin/Dashboard'

const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<App/>}>
        <Route element={<Header/>}>
          <Route index element={<Home/>}></Route>
          <Route path='about' element={<About/>}/>
          <Route path='products' element={<Products/>} />
          <Route path='contact' element={<ContactUs/>} />
          <Route path='register' element={<Register/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='product/details/:id' element={<ProductDetails/>} />
        </Route>
  
        <Route path='login' element={<Login/>} />

        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
        </Route>
    </Route>

    <Route path="*" element={<PageNotFound/>}/>
</Routes>

  )
}

export default Routing
