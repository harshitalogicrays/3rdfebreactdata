// function Home(){
//     return (<></>)
// }

// const Home = ()=>{
//     return (<></>)
// }
// export default Home

//rfc 
// import React from 'react'
// export default function Home() {
//   return (
//     <div>
      
//     </div>
//   )
// }

//rafc
import React from 'react'
import About from './about'

const Home = () => {
  let styles = {color:"blue" , fontSize:"30px" , textDecoration:"underline"}
  return (
    <>
      <h1 style={styles}>Home Page</h1>
    </>
  )
}

export default Home
