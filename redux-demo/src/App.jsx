import { useDispatch } from 'react-redux'
import './App.css'
import { ADD_USER } from './redux/userSlice'

function App() {
  const dispatch =  useDispatch()
  const handleUser =()=>{
    dispatch(ADD_USER({username:"ram",email:"ram@gmail.com",password:"11111",isAdmin:false}))
  }
  return (
    <>
      <button type="button" onClick={handleUser}>Add User</button>
    </>
  )
}

export default App
