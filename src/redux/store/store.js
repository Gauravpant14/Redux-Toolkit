import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {userReducer} from '../reducers/userReducer'
import userSlice from '../slice/userSlice'


//here in redux toolkit we dont have to install redux thunk .
//redux toolkit is already built with thunk 

const rootReducer = combineReducers({
    userSlice,
    userReducer
})

export const store = configureStore({
    reducer: rootReducer
    
})