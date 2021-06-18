// import {createAction} from '@reduxjs/toolkit'

// //this is our old and long method for creating actions 

// // export const userAction = (data) => {
// //     return {
// //         type : "UPDATE_STATUS",
// //         payload: data
// //     }
// // }

// //instead of the old method we can use {createAction} method of redux toolkit

// export const userAction = createAction("UPDATE_STATUS") 

// export const updateNameAsync = () => {
//    return async (dispatch) => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const result = await response.json()
//         dispatch({type:"UPDATE_NAME",payload :result[0].name})
//     }
// }