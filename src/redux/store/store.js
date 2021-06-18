import {configureStore} from '@reduxjs/toolkit'
// import {userReducer} from '../reducers/userReducer'
import userSlice from '../slice/userSlice'

//here in redux toolkit we dont have to install redux thunk .
//redux toolkit is already built with thunk 

export const store = configureStore({
    reducer: userSlice
    
})