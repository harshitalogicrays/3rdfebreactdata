import React from 'react'
import { Route, Routes } from 'react-router'
import App from '../App'
import Home from './Home'
import About from './about'
import Products from './Products'
import ContactUs from './ContactUs'
import Register from './Register'
import Login from './Login'

const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='products' element={<Products/>} />
        <Route path='contact' element={<ContactUs/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />
    </Route>
</Routes>

  )
}

export default Routing
