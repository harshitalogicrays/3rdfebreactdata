// import './App.css'

import { ToastContainer } from "react-toastify"
import About from "./components/about"
import EventDemo from "./components/EventDemo"
import Home from "./components/Home"
import PropsDemo from "./components/PropsDemo"

function App() {
   return (
    <>
     <ToastContainer position="bottom-left"
          autoClose={2000} hideProgressBar
          newestOnTop={false} closeOnClick
          rtl={false} pauseOnFocusLoss={false} draggable={false}
                      pauseOnHover={false}
                      theme="colored"/>

    <div className="container mt-5">
      <h1 style={{color:"orange" , backgroundColor :"lightblue"}}>Hello React</h1>
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

      <EventDemo/>
      <Home/>
    </div>
    </>
  )
}

export default App

