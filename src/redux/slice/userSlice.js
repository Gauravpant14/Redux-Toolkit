import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const getNames = createAsyncThunk(
    'fetchUsers',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
                        const result = await response.json()
                        return result                  
    }
)

const initialState = {
        name:"gaurav",
        age:20,
        status:"react developer",
        allNames:[]
    }

export const userSlice = createSlice({
    name:"user", //it can be any thing (your action type will be decided by this name)
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
        },
    },
    //asyn operations will comes in extra reducer and we'll define asyn op using create asyn thunk
    extraReducers:{

        [getNames.fulfilled] : (state,action) => {
            state.allNames = action.payload
            state.name = action.payload[Math.floor(Math.random()*10)].name
        },
        [getNames.pending] : (state,action) => {
            state.name = "loading !"
        },
        [getNames.rejected] : (state) => {
            state.name = "rejected"
        }
    }
})

export const {nameAction,ageAction,updateAction,fetchName} = userSlice.actions
export default userSlice.reducer