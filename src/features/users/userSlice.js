import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers",async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return data
})

const userSlice = createSlice({
    name:"users",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading = true
        })

        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.data = action.payload
            state.loading = false
        })

        builder.addCase(fetchUsers.rejected, (state,action)=>{
            state.loading = false
            state.error = 'somethin went wrong while calling user api'
        })

    }
})

export default userSlice.reducer