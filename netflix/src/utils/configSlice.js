import { createSlice } from "@reduxjs/toolkit";

let configSlice=createSlice({
        name:"config",
        initialState:{
            lang:"En",
        },
        reducers:{
            changeLanguage:(state,action)=>{
                state.lang=action.payload;
            }
        }
    });

export const {changeLanguage}=configSlice.actions;
export default configSlice.reducer;