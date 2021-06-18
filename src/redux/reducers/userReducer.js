import {createReducer} from '@reduxjs/toolkit'
import { userAction } from '../actions/actions'

const initialState = {
    name:"gaurav",
    age:20,
    status:"react developer"
}

//instead of writing old switch statement method for creating reducer 
// here i am using createReducer method and by the way which is awesome

export const userReducer  = createReducer(initialState,(builder) => {
    builder.addCase('UPDATE_AGE',(state,action) => {
        state.age = action.payload
    })
    builder.addCase('UPDATE_NAME',(state,action)=>{
        state.name = action.payload
    })

    //in this case i am gona use redux tool'skit create action method ..
    //or using action name from userAction method That is created using create action
    builder.addCase(userAction,(state,action) => {
        state.status = action.payload
    })
})