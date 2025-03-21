// import './App.css'

import { ToastContainer } from "react-toastify"
import About from "./components/about"
import EventDemo from "./components/EventDemo"
import Home from "./components/Home"
import PropsDemo from "./components/PropsDemo"
import StateDemo from "./components/StateDemo"
import Counter from "./components/Counter"
import Addition from "./components/Addition"
import Header from "./components/Header"
import { Outlet } from "react-router"

function App() {
   return (
    <>
     <ToastContainer position="bottom-left"
          autoClose={2000} hideProgressBar
          newestOnTop={false} closeOnClick
          rtl={false} pauseOnFocusLoss={false} draggable={false}
                      pauseOnHover={false}
                      theme="colored"/>
      <Outlet/>

      {/* <h1 style={{color:"orange" , backgroundColor :"lightblue"}}>Hello React</h1> */}
      {/* <h2>Welcome to LRA</h2> */}
      {/* <Home></Home>
      <About/> */}

      {/* <PropsDemo title="Props Demo in Fun" username="harshita" isActive={true}
      age={20}></PropsDemo>
      <hr/>
      <PropsDemo title="Props Demo" username="LRA"></PropsDemo>
      <hr/>
      <PropsDemo title="Props Demo">
        <b>div tag</b>
      </PropsDemo>
      <hr/>
      <PropsDemo title="Props Demo">
        <h1>Heading</h1>
        <p>lorem</p>
        <Home/>
      </PropsDemo> */}

      {/* <EventDemo/>
      <Home/> */}

      {/* <StateDemo/> */}
      {/* <Counter/> */}

      {/* <Addition a={2}/> */}

   
    </>
  )
}

export default App

