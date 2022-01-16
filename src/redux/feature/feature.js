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
             state.done.push(action.payload[0])
             
             let ind = state.list.filter(e => e.id !== action.payload[0].id )
             state.list = ind

         }, 
         Edit: (telek, action) => {
             console.log(telek.list)
             let ind = telek.list.findIndex(e => {
                 return e.id === action.payload.id
             })
             console.log('index',ind)
             telek.list[ind] = action.payload
             
         },
         deleteds: (state, action) => {
             console.log(action.payload)
            let ind = state.list.filter(e => e.id !== action.payload )
            state.list = ind
            
             
         },
         cancel: (state, action) => {
            let li = state.done.filter(e => e.id == action.payload)
            state.list.push(li[0])
            let ind = state.done.filter(e => e.id !== action.payload )
            state.done = ind

            
         }
         
    }
})


export const {add, addDone, Edit, deleteds, cancel} = todoListSlice.actions
export default todoListSlice.reducer