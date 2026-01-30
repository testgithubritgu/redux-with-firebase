import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: ""
}

export const nameSlice = createSlice({
    name: "updateName",
    initialState,
    reducers: {
        update: (state, actions) => {
            state.name = actions.payload
        }
    }
})

export const { update } = nameSlice.actions
export default nameSlice.reducer