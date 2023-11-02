import { createSlice } from "@reduxjs/toolkit";

const initialState={count:0}
const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        add:(state)=>{
          state.count+=1;
        },
        minss:(state)=>{
            state.count-=1;
        },
        addByValue:(state,payload)=>{
        
        
        }
    }

})


export default counterSlice.reducer

export const {add,minss,addByValue}=counterSlice.actions

