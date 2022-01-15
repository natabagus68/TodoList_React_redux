import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
    name:'todo',
    initialState:{
       list: [],
       done: [],
       index: 0
    },
    reducers:{
         add: (state, action) => {
             state.list.push(action.payload);
         },
         addDone: (state, action) => {
             state.done.push(action.payload)
         }, 
         Edit: (telek, action) => {
             console.log(telek.list)
             let ind = telek.list.findIndex(e => {
                 return e.id === action.payload.id
             })
             console.log('index',ind)
             telek.list[ind] = action.payload
             
         },
         deleted: (state, action) => {
            let ind = state.list.findIndex(e => {
                return e.id === action.payload.id
            })

            state.list.slice(ind)
             
         }
         
    }
})


export const {add, addDone, Edit, deleted} = todoListSlice.actions
export default todoListSlice.reducer