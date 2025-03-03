/*import React from 'react'

const PropsDemo = (props) => {
    //props = {title:"Props Demo",username:"harshita", isActive:true, age=20}
    // props.title = ":ethehtkhe" //read only
  return (
    <>
        <h1>{props.title}</h1>
        <h2>{props.username}</h2>
        {(props.children) instanceof Array ? <>{props.children[0]}</>  : "No"}
    </>
  )
}

export default PropsDemo
*/


import React from 'react'
const PropsDemo = ({title,username="Ram",children=[],isActive,age=0}) => {
  return (
    <>
        <h1 className='text-danger'>{title}</h1>
        <h2>{username}</h2>
        {(children) instanceof Array ? <>{children[0]}</>  : "No"}

        {isActive ? 
        <h4>{username} is active</h4>  
        : "User is not active"}

        {age >= 18 && <>{username} is a valid user for vote</>}
    </>
  )
}

export default PropsDemo



















