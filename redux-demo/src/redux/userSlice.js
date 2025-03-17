import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{users:[], error:"" , loading:false },
    reducers:{
        //pure functions
        ADD_USER : (state,action)=>{
            alert("add user called")
            console.log(action.payload)
            state.users.push(action.payload)
        } ,
        remove_user(state,action){},
        remove_all_users(state,action){}
    }
})
// console.log(userSlice.actions)

export const {ADD_USER} = userSlice.actions
export default userSlice