import { createSlice ,nanoid} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{users:[], error:"" , loading:false },
    reducers:{//pure functions
        ADD_USER : (state,action)=>{ //user
            state.users.push({...action.payload,id:nanoid() , createdAt:new Date()})  } ,
        remove_user(state,action){ //id
                const itemIndex =  state.users.findIndex(item=>item.id==action.payload)
                if(itemIndex != -1){
                    state.users.splice(itemIndex,1) }

            //     const filters =  state.users.filter(item=>item.id!=action.payload)
            //    state.users = filters
        },
        remove_all_users(state,action){ state.users = []} }})
// console.log(userSlice.actions)
export const {ADD_USER,remove_user,remove_all_users} = userSlice.actions
export default userSlice
export const selectUsers = state=>state.user.users