import {createSlice} from '@reduxjs/toolkit'

 const initialState = {
        name:"gaurav",
        age:20,
        status:"react developer"
    }

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        nameAction(state,action){
            state.name = action.payload
        },
        ageAction(state,action){
            state.age = action.payload
        },
        updateAction(state,action){
            state.status = action.payload
        }

    }
})

export const {nameAction,ageAction,updateAction} = userSlice.actions
export default userSlice.reducer