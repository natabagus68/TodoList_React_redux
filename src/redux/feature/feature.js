import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
    name:'todo',
    initialState:{
       list: []
    },
    reducers:{
         add: (state, action) => {
             state.list.push(action.payload);
         }
    }
})


export const {add} = todoListSlice.actions
export default todoListSlice.reducer