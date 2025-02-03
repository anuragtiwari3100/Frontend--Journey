import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment : (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})


/*
n summary, you export the actions and the reducer separately because:
The actions (increment and decrement) are used to dispatch actions to the store.
The reducer (CounterSlice.reducer) is used to update the state in the store based on the dispatched actions.
*/
export const {increment, decrement} = CounterSlice.actions;
export default CounterSlice.reducer;