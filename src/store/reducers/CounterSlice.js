import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCount(state, action) {
            state.count += action.payload
        },
        reduceCount(state) {
            state.count--
        }
    }
})

export default slice.reducer

export const {addCount, reduceCount} = slice.actions

//test branch

//testt