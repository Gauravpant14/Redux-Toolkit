import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    name:"gaurav",
    age:22
}
export const store = configureStore({
    reducer:(state)=>{
        return state
    },
    preloadedState:initialState
})