import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"Gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        }
    }
})

export default gptSlice.reducer;
export const {toggleGptSearchView}=gptSlice.actions;