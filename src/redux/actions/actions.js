import {createAction} from '@reduxjs/toolkit'

//this is our old and long method for creating actions 

// export const userAction = (data) => {
//     return {
//         type : "UPDATE_STATUS",
//         payload: data
//     }
// }

//instead of the old method we can use {createAction} method of redux toolkit

export const userAction = createAction("UPDATE_STATUS") 