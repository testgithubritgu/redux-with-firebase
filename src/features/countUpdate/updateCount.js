import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count : 0
}

export const updateCount = createSlice({
    initialState,
    name:"updatecount",
    reducers:{
        addcount:(state,actions)=>{
            state.count = actions.payload
        },
        reset:(state)=>{
            state.count = 0
        }
    }
})

export const {addcount,reset} = updateCount.actions
export default updateCount.reducer