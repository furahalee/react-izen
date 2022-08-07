import { createSlice } from '@reduxjs/toolkit';

export const counerSlice  = createSlice({
    name:'count',
    initialState:{
        num : 0
    },
    reducers:{
        increment : state  => {
            state.num += 1
        },
        decrement : state  => {
            state.num -= 1 
        },
        add : ( state , action ) => {
            state.num += action.payload 
        },
        sub : ( state , action ) => {
            state.num -= action.payload 
        },
        reset : state => {
            state.num  =  0 
        }
    }
})

export const { increment,decrement,add,reset, sub } = counerSlice.actions;
export default counerSlice.reducer