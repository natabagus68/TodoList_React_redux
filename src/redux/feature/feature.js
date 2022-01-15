import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
    name:'todo',
    initialState:{
       list: [],
       done: []
    },
    reducers:{
         add: (state, action) => {
             state.list.push(action.payload);
         },
         addDone: (state, action) => {
             state.done.push(action.payload)
         }
    }
})


export const {add} = todoListSlice.actions
export default todoListSlice.reducer