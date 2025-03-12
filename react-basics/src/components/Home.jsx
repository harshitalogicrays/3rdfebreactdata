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
  let names = ["Kishan", "ali", "mihir", "hitarth", "dhrumil", "dhrumil", "Foram", "Krupa", "Shrushti"]

  let styles = { color: "blue", fontSize: "30px", textDecoration: "underline" }


  let users = [
    { id: 1, fname: 'aaaa', lname: 'aaaa', mobile: 999999, age: 20, city: 'pune', gender: 'male' },
    { id: 2, fname: 'bbbb', lname: 'fdgd', mobile: 77778, age: 22, city: 'aaa', gender: 'female' },
    { id: 3, fname: 'aacccaa', lname: 'adgdaaa', mobile: 88789, age: 10, city: 'erw', gender: 'male' },
    { id: 4, fname: 'ddd', lname: 'dgdg', mobile: 778768, age: 2, city: 'wrw', gender: 'female' },
    { id: 5, fname: 'eee', lname: 'aadgdaa', mobile: 896766543, age: 50, city: 'pwrwune', gender: 'male' },
    { id: 6, fname: 'fff', lname: 'dgdqe', mobile: 33253, age: 10, city: 'wr', gender: 'other' },
    { id: 7, fname: 'gg', lname: 'ewq', mobile: 4242, age: 90, city: 'wr', gender: 'female' },
    { id: 8, fname: 'hh', lname: 'iui', mobile: 232, age: 42, city: 'wrwr', gender: 'male' },
  ]
  return (
    <>
      <h1 style={styles}>Home Page</h1>
      {/* {names[0]} */}
      {/* {names.join(" ")} */}

      {/* { names.map((val , index)=> { return <h4>{val}</h4>} ) } */}
      {/* { names.map((val , index)=><h4 key={index}> {index+1} : {val}</h4> ) } */}


      {/* {users.map((user)=><p key={user.id}> {JSON.stringify(user)} </p>)} */}
      {/* {users.map((user)=><p key={user.id}> {user.fname} </p>)} */}

      <table className='table table-bordered table-striped  table-hover'>
        <thead>
          <tr>
            <th>Sr. No</th><th>Fname</th><th>Lname</th>
            <th>Mobile</th> <th>Age</th> <th>Gender</th>  <th>City</th>      
          </tr>
        </thead>
        <tbody>
          {users.length==0 &&  <tr><td colSpan={7} className='text-center'>No User Found</td></tr>}
         
          {/* {users.map((user,index)=>
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.mobile}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
            </tr>
          )} */}
            {users.map((user,index)=>{
           return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.mobile}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
            </tr> )
          })}
        </tbody>
      </table>

    </>
  )
}

export default Home
